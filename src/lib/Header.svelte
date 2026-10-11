<script lang="ts">
  import { page } from '$app/state';
  import { path } from '$lib/paths';
  let open = $state(false);
  const links = [['Home', '/'], ['Athletes', '/athletes'], ['Plans', '/plans'], ['Run tools', '/tools'], ['Resources', '/resources'], ['Contact', '/contact']];
</script>

<header class:open>
  <a class="brand" href={path('/')} aria-label="Mathieu Coaching home"><img src={path('/assets/coaching-logo-navbar.png')} alt="Mathieu Coaching" /></a>
  <button class="menu" onclick={() => open = !open} aria-expanded={open}>{open ? 'Close' : 'Menu'} <i></i></button>
  <nav aria-label="Main navigation">
    {#each links as [label, href]}
      <a href={path(href)} class:active={page.url.pathname === href} onclick={() => open = false}>{label}</a>
    {/each}
    <a class="nav-cta" href={path('/contact')}>Start here ↗</a>
  </nav>
</header>

<style>
  header { align-items:center; background:rgba(17,19,18,.93); border-bottom:1px solid rgba(218,245,177,.17); display:flex; height:75px; justify-content:space-between; padding:0 clamp(1rem,3vw,3.5rem); position:sticky; top:0; z-index:30; backdrop-filter:blur(12px); }
  .brand { align-items:center; display:flex; height:58px; text-decoration:none; }
  .brand img { display:block; height:54px; object-fit:contain; object-position:left center; width:118px; }
  nav { align-items:center; display:flex; gap:1.25rem; } nav a { color:#d7dbcf; font-family:var(--mono); font-size:.68rem; letter-spacing:.11em; text-decoration:none; text-transform:uppercase; } nav a:hover, nav .active { color:var(--acid); } .nav-cta { border:1px solid var(--acid); padding:.75rem .9rem; }
  .menu { display:none; }
  @media(max-width:800px) { .menu { background:none; border:0; color:var(--paper); display:flex; font: .7rem var(--mono); gap:.55rem; letter-spacing:.1em; text-transform:uppercase; } .menu i { border-top:1px solid var(--acid); display:block; margin-top:.35rem; width:16px; } nav { background:#111312; border-bottom:1px solid var(--acid); display:none; flex-direction:column; gap:0; left:0; padding:1.2rem 1.5rem 1.6rem; position:absolute; top:75px; width:100%; } .open nav { display:flex; } nav a { border-bottom:1px solid #30342e; padding:1rem 0; width:100%; } .nav-cta { margin-top:.5rem; padding:.9rem; text-align:center; } }
</style>
