<script lang="ts">
  import './+layout.css';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  let { children } = $props();
</script>
<svelte:head><title>Mathieu Coaching — Make it count.</title></svelte:head>
<Header />{@render children()}<Footer />
