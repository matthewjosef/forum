
<script lang="ts">
import { onMount, getContext } from 'svelte';
import '@material/mwc-circular-progress';
import type { AppAgentClient, Record, ActionHash, EntryHash, AgentPubKey } from '@holochain/client';
import { clientContext } from '../../contexts';
import type { Comment } from './types';
import CommentDetail from './CommentDetail.svelte';
import CreateComment from './CreateComment.svelte';

export let postHash: ActionHash;

let client: AppAgentClient = (getContext(clientContext) as any).getClient();

let hashes: Array<ActionHash> | undefined;

let loading = true;
let error: any = undefined;

$: hashes, loading, error;

onMount(async () => {
  if (postHash === undefined) {
    throw new Error(`The postHash input is required for the CommentsForPost element`);
  }

  try {
    hashes = await client.callZome({
      cap_secret: null,
      role_name: '',
      zome_name: 'posts',
      fn_name: 'get_comments_for_post',
      payload: postHash
    });
  } catch (e) {
    error = e;
  }
  loading = false;
});

</script>

{#if loading }
<div style="display: flex; flex: 1; align-items: center; justify-content: center">
  <mwc-circular-progress indeterminate></mwc-circular-progress>
</div>
{:else if error}
<span>Error fetching comments: ${error.data.data}.</span>
{:else if hashes.length === 0}
<span>No comments found for this post.</span>
{:else}
<div>
  <CreateComment {postHash}></CreateComment>
</div>
<div style="display: flex; flex-direction: column">
  {#each hashes as hash}
    <div style="margin-bottom: 8px;">
      <CommentDetail commentHash={hash}></CommentDetail>
    </div>
  {/each}
</div>
{/if}
