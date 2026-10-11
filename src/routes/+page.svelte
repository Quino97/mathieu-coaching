<script lang="ts">
  import { site } from '$lib/content';
  import { path } from '$lib/paths';
</script>

<svelte:head><title>Mathieu Coaching — Make it count.</title></svelte:head>

<section class="hero grain">
  <img src={path('/assets/hero-run.jpg')} alt="Runners tracing a route at night" />
  <div class="hero-copy"><span class="eyebrow">Independent running coach / Cape Town</span><h1>MAKE<br /><em>IT</em> COUNT.</h1><p>{site.intro}</p><a class="button solid" href={path('/contact')}>Tell me your goal <b>↗</b></a></div>
  <div class="hero-meta"><span>01 — 06</span><span>Built for the work<br />between start lines.</span></div>
</section>

<div class="ticker" aria-label="Coaching specialties"><div>{#each site.achievements as item}<span>{item} <b>✦</b></span>{/each}</div></div>

<section class="manifesto grit">
  <div class="eyebrow">The premise / 01</div>
  <div><h2 class="section-title">THE PLAN<br />SHOULD FIT<br /><span>THE LIFE.</span></h2><p class="lede">No borrowed training plan can know your work week, your old injuries, or the way you show up when a session gets uncomfortable. Good coaching is an ongoing conversation: clear goals, fewer distractions and work you can repeat.</p><a class="button" href={path('/plans')}>See how coaching works →</a></div>
</section>

<section class="philosophy grit">
  <div class="section-head"><span class="eyebrow">Coaching philosophy / 02</span><h2 class="section-title">THE WORK<br />IS THE POINT.</h2></div>
  <div class="principles">{#each site.philosophy as [title, body], i}<article><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>{/each}</div>
</section>

<section class="proof grit">
  <div><span class="eyebrow">Progress, not promises / 03</span><h2 class="section-title">REAL<br />RUNNERS.<br /><em>REAL WORK.</em></h2></div>
  <div class="result-stack">{#each site.athletes as athlete}<a href={path('/athletes')}><small>{athlete.event.toUpperCase()}</small><strong>{athlete.name}</strong><span>{athlete.before} <i>→</i> {athlete.after}</span><b>{athlete.delta}</b></a>{/each}<a class="button" href={path('/athletes')}>Meet the athletes →</a></div>
</section>

<section class="closing grit"><p class="eyebrow">Your next honest effort starts here.</p><h2>YOU BRING<br />THE <em>WHY.</em><br />WE BUILD<br />THE HOW.</h2><a class="button solid" href={path('/contact')}>Start a conversation ↗</a></section>

<style>
  .hero{height:min(820px,calc(100svh - 75px));min-height:620px;overflow:hidden;position:relative}.hero>img{filter:saturate(.65) contrast(1.17) brightness(.65);height:100%;object-fit:cover;object-position:center 44%;width:100%}.hero:before{background:linear-gradient(90deg,rgba(5,9,8,.92),rgba(5,9,8,.18) 67%,rgba(5,9,8,.4));content:'';inset:0;position:absolute;z-index:1}.hero-copy{bottom:clamp(2.5rem,9vw,7rem);left:clamp(1.4rem,7vw,8rem);max-width:700px;position:absolute;z-index:2}.hero h1{font:clamp(5.6rem,15vw,13rem)/.8 var(--display);letter-spacing:-.075em;margin:1rem 0 1.5rem}.hero h1 em,.proof em,.closing em{color:var(--acid);font-style:normal}.hero p{font-size:clamp(1rem,1.5vw,1.22rem);line-height:1.45;max-width:330px}.hero-meta{bottom:1.8rem;display:flex;font:.65rem var(--mono);justify-content:space-between;left:clamp(1.4rem,7vw,8rem);letter-spacing:.07em;position:absolute;right:clamp(1.4rem,4vw,5rem);text-transform:uppercase;z-index:2}.hero-meta span:last-child{text-align:right}.ticker{background:var(--acid);color:var(--ink);font:1rem var(--display);letter-spacing:.04em;overflow:hidden;padding:.92rem 0;white-space:nowrap}.ticker div{animation:move 35s linear infinite;width:max-content}.ticker span{margin-right:2.3rem}.ticker b{font-family:Arial;font-size:.7rem;margin-left:.7rem}@keyframes move{to{transform:translateX(-50%)}}.manifesto{background:var(--paper);color:var(--ink);display:grid;gap:4rem;grid-template-columns:.7fr 1.4fr;padding:clamp(4rem,10vw,11rem) clamp(1.4rem,9vw,11rem)}.manifesto .eyebrow{color:#546244}.manifesto .section-title span{color:#778f5b}.lede{font-size:clamp(1.15rem,2.2vw,1.75rem);line-height:1.38;max-width:670px}.manifesto .button{border-color:var(--ink);color:var(--ink);margin-top:1.5rem}.philosophy{background:#20251f;padding:clamp(4rem,8vw,9rem) clamp(1.4rem,7vw,8rem);position:relative}.section-head{max-width:700px}.section-head h2{margin-top:1.1rem}.principles{border-top:1px solid #687062;margin-top:4rem}.principles article{border-bottom:1px solid #687062;display:grid;grid-template-columns:.4fr 1fr 1.1fr;gap:1rem;padding:1.5rem 0}.principles span{color:var(--acid);font:.7rem var(--mono)}.principles h3{font:clamp(1.3rem,2.4vw,2.2rem)/1.1 var(--display);letter-spacing:-.02em;margin:0}.principles p{margin:0;max-width:400px;line-height:1.5}.proof{background:var(--ink);display:grid;gap:3rem;grid-template-columns:1.1fr .9fr;padding:clamp(4rem,9vw,10rem) clamp(1.4rem,7vw,8rem)}.proof h2{margin-top:1rem}.result-stack{display:flex;flex-direction:column;gap:.6rem;justify-content:center}.result-stack>a:not(.button){align-items:center;border-bottom:1px solid #4a5149;color:var(--paper);display:grid;gap:1rem;grid-template-columns:.8fr 1.3fr 1fr .6fr;padding:1.2rem 0;text-decoration:none}.result-stack small{color:var(--acid);font:.64rem var(--mono);letter-spacing:.1em}.result-stack strong{font:1.35rem var(--display);letter-spacing:.02em}.result-stack span{font:1rem var(--mono)}.result-stack i{color:var(--acid);font-style:normal}.result-stack>a>b{font:.73rem var(--mono);text-align:right}.result-stack .button{align-self:flex-start;margin-top:1.5rem}.closing{background:var(--acid);color:var(--ink);padding:clamp(4rem,9vw,11rem) clamp(1.4rem,7vw,8rem)}.closing h2{font:clamp(4rem,12vw,12rem)/.83 var(--display);letter-spacing:-.07em;margin:1rem 0 2.5rem}.closing em{color:#6c8150}@media(max-width:700px){.hero h1{font-size:5.4rem}.manifesto,.proof{grid-template-columns:1fr}.principles article{grid-template-columns:.25fr 1fr}.principles p{grid-column:2}.result-stack>a:not(.button){grid-template-columns:1fr 1fr}.result-stack span{grid-column:1}.result-stack>a>b{grid-column:2;grid-row:2}.hero-meta{display:none}}
</style>
