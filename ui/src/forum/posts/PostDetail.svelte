<script lang="ts">
import { createEventDispatcher, onMount, getContext } from 'svelte';
import '@material/mwc-circular-progress';
import { decode } from '@msgpack/msgpack';
import type { Record, ActionHash, AppAgentClient, EntryHash, AgentPubKey, DnaHash } from '@holochain/client';
import { clientContext } from '../../contexts';
import type { Post } from './types';
import '@material/mwc-circular-progress';
import type { Snackbar } from '@material/mwc-snackbar';
import '@material/mwc-snackbar';
import '@material/mwc-icon-button';
import CommentsForPost from './CommentsForPost.svelte';
import CreateComment from './CreateComment.svelte';

const dispatch = createEventDispatcher();

export let postHash: ActionHash;

let client: AppAgentClient = (getContext(clientContext) as any).getClient();

let loading = true;
let error: any = undefined;

let record: Record | undefined;
let post: Post | undefined;
  
$:  error, loading, record, post;

function handleBack() {
    dispatch('back');
  }


onMount(async () => {
  if (postHash === undefined) {
    throw new Error(`The postHash input is required for the PostDetail element`);
  }
  await fetchPost();
});

async function fetchPost() {
  loading = true;
  error = undefined;
  record = undefined;
  post = undefined;
  
  try {
    record = await client.callZome({
      cap_secret: null,
      role_name: 'forum',
      zome_name: 'posts',
      fn_name: 'get_post',
      payload: postHash,
    });
    if (record) {
      post = decode((record.entry as any).Present.entry) as Post;
    }
  } catch (e) {
    error = e;
  }

  loading = false;
}

</script>
<button on:click={handleBack}>Back</button>
{#if loading}
<div style="display: flex; flex: 1; align-items: center; justify-content: center">
  <mwc-circular-progress indeterminate></mwc-circular-progress>
</div>
{:else if error}
<span>Error fetching the post: {error.data.data}</span>
{:else}

<div style="display: flex; flex-direction: column">
  <div style="display: flex; flex-direction: row">
    <span style="flex: 1"></span>
  </div>

  <div style="display: flex; flex-direction: row; margin-bottom: 16px">
    <span style="margin-right: 4px"><strong>Title:</strong></span>
    <span style="white-space: pre-line">{ post.title }</span>
  </div>

  <div style="display: flex; flex-direction: row; margin-bottom: 16px">
    <span style="margin-right: 4px"><strong>Content:</strong></span>
    <span style="white-space: pre-line">{ post.content }</span>
  </div>
  <div>
    <CreateComment {postHash}></CreateComment>
  </div>

<div>
  <CommentsForPost {postHash}></CommentsForPost>
</div>
</div>
{/if}

