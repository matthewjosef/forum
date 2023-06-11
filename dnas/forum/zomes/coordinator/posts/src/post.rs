use hdk::prelude::*;
use posts_integrity::*;
#[hdk_extern]
pub fn create_post(post: Post) -> ExternResult<Record> {
    let post_hash = create_entry(&EntryTypes::Post(post.clone()))?;
    let record = get(post_hash.clone(), GetOptions::default())?
        .ok_or(
            wasm_error!(
                WasmErrorInner::Guest(String::from("Could not find the newly created Post"))
            ),
        )?;
    let path = Path::from("all_posts");
    create_link(path.path_entry_hash()?, post_hash.clone(), LinkTypes::AllPosts, ())?;
    Ok(record)
}
#[hdk_extern]
pub fn get_post(post_hash: ActionHash) -> ExternResult<Option<Record>> {
    get(post_hash, GetOptions::default())
}
