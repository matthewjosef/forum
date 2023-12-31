use hdk::prelude::*;
use posts_integrity::*;
#[hdk_extern]
pub fn create_comment(comment: Comment) -> ExternResult<Record> {
    let comment_hash = create_entry(&EntryTypes::Comment(comment.clone()))?;
    create_link(
        comment.post_hash.clone(),
        comment_hash.clone(),
        LinkTypes::PostToComments,
        (),
    )?;
    let record = get(comment_hash.clone(), GetOptions::default())?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest(String::from("Could not find the newly created Comment"))
            ),
        )?;
    Ok(record)
}
#[hdk_extern]
pub fn get_comment(original_comment_hash: ActionHash) -> ExternResult<Option<Record>> {
    let links = get_links(
        original_comment_hash.clone(),
        LinkTypes::CommentUpdates,
        None,
    )?;
    let latest_link = links
        .into_iter()
        .max_by(|link_a, link_b| link_a.timestamp.cmp(&link_b.timestamp));
    let latest_comment_hash = match latest_link {
        Some(link) => ActionHash::from(link.target.clone()),
        None => original_comment_hash.clone(),
    };
    get(latest_comment_hash, GetOptions::default())
}
#[derive(Serialize, Deserialize, Debug)]
pub struct UpdateCommentInput {
    pub original_comment_hash: ActionHash,
    pub previous_comment_hash: ActionHash,
    pub updated_comment: Comment,
}
#[hdk_extern]
pub fn update_comment(input: UpdateCommentInput) -> ExternResult<Record> {
    let updated_comment_hash = update_entry(
        input.previous_comment_hash.clone(),
        &input.updated_comment,
    )?;
    create_link(
        input.original_comment_hash.clone(),
        updated_comment_hash.clone(),
        LinkTypes::CommentUpdates,
        (),
    )?;
    let record = get(updated_comment_hash.clone(), GetOptions::default())?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest(String::from("Could not find the newly updated Comment"))
            ),
        )?;
    Ok(record)
}
#[hdk_extern]
pub fn delete_comment(original_comment_hash: ActionHash) -> ExternResult<ActionHash> {
    delete_entry(original_comment_hash)
}
#[hdk_extern]
pub fn get_comments_for_post(post_hash: ActionHash) -> ExternResult<Vec<Record>> {
    let links = get_links(post_hash, LinkTypes::PostToComments, None)?;
    let get_input: Vec<GetInput> = links
        .into_iter()
        .map(|link| GetInput::new(
            ActionHash::from(link.target).into(),
            GetOptions::default(),
        ))
        .collect();
    let records: Vec<Record> = HDK
        .with(|hdk| hdk.borrow().get(get_input))?
        .into_iter()
        .filter_map(|r| r)
        .collect();
    Ok(records)
}
