<script>
  import { stores } from '@sapper/app';

  const { session } = stores();
</script>

{#if $session?.profile?.scope?.includes('owner')}
  <h1>My Organisation</h1>

  <p>Stuff.</p>
{/if}
