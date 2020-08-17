<script context="module">
  // import { stores } from '@sapper/app';
  // const { session } = stores();
  export async function preload(p1, p2, p3) {
    console.log('lol');
    console.log(p1);
    console.log(p2);
    console.log(p3);
  }
</script>

<script>
  import { stores } from '@sapper/app';

  const { session } = stores();
</script>

{#if $session?.profile?.scope?.includes('owner')}
  <h1>My Organisation</h1>

  <p>Stuff.</p>
{/if}
