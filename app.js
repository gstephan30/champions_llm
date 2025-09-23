(function(){
  const viewport = document.getElementById('viewport');
  const titleEl = document.getElementById('slide-title');
  const idxEl = document.getElementById('idx');
  const totalEl = document.getElementById('total');
  const bar = document.getElementById('bar');
  const todayEl = document.getElementById('today');

  // Footer date
  if (todayEl) {
    const d = new Date();
    todayEl.textContent = d.toLocaleDateString('de-DE', { year:'numeric', month:'2-digit', day:'2-digit' });
  }

  // State
  let slides = [];
  let i = 0;           // slide index
  let step = 0;        // step index within slide
  let steps = [];      // current slide steps
  let afterList = [];  // elements revealed after list completes

  // Load slides.html and init
  fetch('slides.html', { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(html => {
      viewport.innerHTML = html;
      slides = Array.from(viewport.querySelectorAll('.slide'));
      if (slides.length === 0) throw new Error('Keine Slides gefunden.');
      totalEl.textContent = slides.length;

      const hashIndex = parseInt(location.hash.replace('#',''),10);
      if(!isNaN(hashIndex) && hashIndex>=1 && hashIndex<=slides.length){ i = hashIndex-1; }

      show(i);
      bindEvents();
      fit();
    })
    .catch(err => {
      console.error(err);
      viewport.innerHTML = `<section class="slide current" style="display:block"><h1>Fehler beim Laden</h1><p class="note">Konnte <code>slides.html</code> nicht laden. Prüfe Dateipfade oder Hosting-Einstellungen.</p></section>`;
      totalEl.textContent = '1';
      idxEl.textContent = '1';
    });

function collectSteps(slide){
  const appear = slide.dataset.appear || 'by-bullet';

  // Everything that should reveal in order:
  //  - explicit step markers: .step or [data-step]
  //  - bullets: ul > li, ol > li
  // Keep DOM order by a single querySelectorAll.
  const all = Array.from(slide.querySelectorAll(
    '.step, [data-step], ul > li, ol > li'
  ));

  // Exclude items inside elements that should not step (e.g., code blocks)
  const steps = all.filter(el => !el.closest('pre, code, .code-chunk'));

  // "after list" elements still supported (reveal when all bullets + steps are done)
  afterList = Array.from(slide.querySelectorAll('[data-after="list"]'));

  return { steps, appear };
}

  function applyStepVisibility(appear){
    if (appear === 'instant') {
        steps.forEach(el => { el.style.visibility='visible'; el.style.opacity=1; });
        afterList.forEach(el => { el.style.visibility='visible'; el.style.opacity=1; });
        return;
    }
    steps.forEach((el, idx)=>{
        if (idx < step) {
        el.style.visibility = 'visible';
        el.style.opacity = 1;
        } else {
        el.style.visibility = 'hidden';
        el.style.opacity = 0;
        }
    });
    const showAfter = step >= steps.length;
    afterList.forEach(el=>{
        el.style.visibility = showAfter ? 'visible' : 'hidden';
        el.style.opacity = showAfter ? 1 : 0;
    });
}

  function fit(){
    const vp=viewport;
    if(!vp) return;
    const W=vp.clientWidth, H=vp.clientHeight;
    const cs = getComputedStyle(document.documentElement);
    const sW=parseInt(cs.getPropertyValue('--slide-w'));
    const sH=parseInt(cs.getPropertyValue('--slide-h'));
    const scale=Math.min(W/sW, H/sH);
    vp.style.setProperty('--scale', scale > 0 ? scale : 1);
  }

  // Navigation core
  function show(n){
    i = Math.max(0, Math.min(slides.length-1, n));
    slides.forEach((s, k)=>s.classList.toggle('current', k===i));
    const cur = slides[i];
    const t = cur.dataset.title || `Slide ${i+1}`;
    if (titleEl) titleEl.textContent = t;
    if (idxEl) idxEl.textContent = i+1;
    if (bar) bar.style.width = (((i+1)/slides.length)*100).toFixed(1)+'%';

    // steps handling
    const { steps: collected, appear } = collectSteps(cur);
    steps = collected;
    step = (appear === 'instant') ? steps.length : 0;
    applyStepVisibility(appear);

    if (history && history.replaceState) history.replaceState(null, '', `#${i+1}`);
  }

  function next(){
    const cur = slides[i];
    const appear = cur?.dataset.appear || 'by-bullet';
    if (appear !== 'instant' && step < steps.length) {
      step++;
      applyStepVisibility(appear);
    } else {
      show(i+1);
    }
  }

  function prev(){
    const cur = slides[i];
    const appear = cur?.dataset.appear || 'by-bullet';
    if (appear !== 'instant' && step > 0) {
      step--;
      applyStepVisibility(appear);
    } else {
      show(i-1);
    }
  }

  function bindEvents(){
    window.addEventListener('keydown', (e)=>{
      const k=e.key.toLowerCase();
      if(['arrowright','pageup',' '].includes(k)) { e.preventDefault(); next(); }
      if(['arrowleft','pagedown'].includes(k))   { e.preventDefault(); prev(); }
      if(k==='f'){
        const el=document.documentElement;
        if(!document.fullscreenElement){ el.requestFullscreen?.(); } else { document.exitFullscreen?.(); }
      }
    });
    window.addEventListener('click', (e)=>{
      const w = window.innerWidth;
      if(e.clientX > w/2) next(); else prev();
    });
    window.addEventListener('resize', fit);
    window.addEventListener('hashchange', ()=>{
      const hashIndex = parseInt(location.hash.replace('#',''),10);
      if(!isNaN(hashIndex) && hashIndex>=1 && hashIndex<=slides.length){ show(hashIndex-1); }
    });
  }
})();
