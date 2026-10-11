<script lang="ts">import { path } from '$lib/paths';</script>
<footer>
  <div><div class="wordmark">MATHIEU<br /><i>COACHING</i></div><p>Make the ordinary weeks count.</p></div>
  <div class="foot-links"><a href={path('/athletes')}>Athletes</a><a href={path('/plans')}>Plans</a><a href={path('/tools')}>Run tools</a><a href={path('/contact')}>Contact</a><a href={path('/admin')}>Admin ↗</a></div>
  <small>© {new Date().getFullYear()} MATHIEU COACHING<br />CAPE TOWN / EVERYWHERE</small>
</footer>
<style>
  footer { background:var(--acid); color:#151714; display:grid; gap:2rem; grid-template-columns:1.7fr 1fr 1fr; padding:clamp(2rem,5vw,5rem); } .wordmark { font:clamp(2rem,4vw,4.4rem)/.76 var(--display); letter-spacing:-.05em; } .wordmark i { font-style:normal; font-size:.5em; letter-spacing:.12em; } p,small,a { font: .72rem/1.7 var(--mono); letter-spacing:.05em; } .foot-links { display:grid; grid-template-columns:1fr 1fr; gap:.3rem; } a { color:inherit; text-decoration:none; } a:hover { text-decoration:underline; } small { align-self:end; text-align:right; } @media(max-width:700px){footer{grid-template-columns:1fr 1fr} small{grid-column:1/-1;text-align:left;}}
</style>
