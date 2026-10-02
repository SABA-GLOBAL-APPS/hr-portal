'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ld=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
let S=ld('hra',{done:[],chk:{},q:{}});const save=()=>sv('hra',S);
const app=$('#app');
const lessonsOf=m=>m.L.length;
function updStat(){$('#stat').textContent=`${S.done.length} من ${MODULES.length} مكتمل`}
function reveal(){const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.08});$$('.rv').forEach(el=>io.observe(el))}
function countUp(el,to){let n=0;const s=setInterval(()=>{n=Math.min(n+Math.max(1,Math.ceil(to/20)),to);el.textContent=n;if(n>=to)clearInterval(s)},35)}

function home(){
  const hrs=MODULES.reduce((a,m)=>a+parseInt(m.d),0),pct=Math.round(S.done.length/MODULES.length*100);
  const next=Math.max(0,MODULES.findIndex((_,i)=>!S.done.includes(i)));
  app.innerHTML=`<div class="wrap"><section class="hero"><h1>برنامج متكامل لتأهيل متخصصي الموارد البشرية</h1><p>${MODULES.length} مسارات تغطي الاستراتيجية والتوظيف والقانون والأجور والأداء والذكاء الاصطناعي، بتمارين تطبيقية واختبارات قصيرة.</p>
  <div class="kpis"><div class="kpi"><b data-n="${MODULES.length}">0</b><small>موديول</small></div><div class="kpi"><b data-n="${hrs}">0</b><small>ساعة تدريب</small></div><div class="kpi"><b data-n="${pct}">0</b><small>% تقدمك</small></div></div>
  <a class="btn" href="#/m/${next+1}">${S.done.length?'أكمل من حيث توقفت':'ابدأ التعلم'}</a></section>
  <div class="grid">${MODULES.map((m,i)=>`<a class="card rv ${S.done.includes(i)?'done':''}" href="#/m/${i+1}" style="transition-delay:${(i%4)*70}ms"><span class="n">${S.done.includes(i)?'✓':i+1}</span><h3>${m.t}</h3><p>${m.g}</p><div class="meta"><span>${m.c}</span><span>${m.d}</span></div></a>`).join('')}</div></div>`;
  $$('[data-n]').forEach(e=>countUp(e,+e.dataset.n));reveal();
}

function mod(id){
  const i=id-1,m=MODULES[i];if(!m)return home();
  const ck=S.chk[i]||[],q=S.q[i];
  const nav=[...m.L.map((l,k)=>[`s${k}`,l[0]]),['sk','قائمة التطبيق'],['sq','اختبار سريع']];
  app.innerHTML=`<div class="wrap"><div class="mh"><span class="tag">${m.c} · ${m.d}</span><h1>${m.t}</h1><p>${m.g}</p></div>
  <div class="cols"><nav class="toc">${nav.map(n=>`<a href="#/m/${id}" data-s="${n[0]}">${n[1]}</a>`).join('')}</nav><div>
  ${m.L.map((l,k)=>`<section class="sec rv" id="s${k}"><h2><i>${k+1}</i>${l[0]}</h2><p>${l[1]}</p><ul class="pts">${l[2].map(p=>`<li>${p}</li>`).join('')}</ul></section>`).join('')}
  <section class="sec rv" id="sk"><h2><i>✓</i>قائمة التطبيق العملي</h2>${m.K.map((k,j)=>`<label class="chk ${ck[j]?'on':''}"><input type="checkbox" data-k="${j}" ${ck[j]?'checked':''}><span>${k}</span></label>`).join('')}</section>
  <section class="sec rv" id="sq"><h2><i>؟</i>اختبر نفسك</h2><p>${m.Q[0]}</p><div id="opts">${m.Q[1].map((o,j)=>`<button class="opt ${q!=null?(j===m.Q[2]?'ok':j===q?'bad':''):''}" data-o="${j}" ${q!=null?'disabled':''}>${o}</button>`).join('')}</div><div id="ex">${q!=null?`<div class="ex">${m.Q[3]}</div>`:''}</div></section>
  <div class="fin rv">${i>0?`<a class="pill ghost" href="#/m/${id-1}">السابق</a>`:'<span></span>'}<button class="pill ${S.done.includes(i)?'ok':''}" id="dn">${S.done.includes(i)?'مكتمل ✓':'تعليم الموديول كمكتمل'}</button>${i<MODULES.length-1?`<a class="pill ghost" href="#/m/${id+1}">التالي</a>`:'<a class="pill ghost" href="#/">الرئيسية</a>'}</div>
  </div></div></div>`;
  $$('.chk input').forEach(c=>c.onchange=()=>{S.chk[i]=$$('.chk input').map(x=>x.checked);c.closest('.chk').classList.toggle('on',c.checked);save()});
  $$('.opt').forEach(b=>b.onclick=()=>{S.q[i]=+b.dataset.o;save();mod(id);$('#sq').scrollIntoView({block:'center'})});
  $('#dn').onclick=()=>{S.done=S.done.includes(i)?S.done.filter(x=>x!==i):[...S.done,i];save();updStat();mod(id)};
  const links=$$('.toc a');links.forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.dataset.s).scrollIntoView()});
  const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.dataset.s===e.target.id))}),{rootMargin:'-30% 0px -60% 0px'});
  $$('.sec').forEach(s=>spy.observe(s));reveal();
}

function route(){const h=location.hash.match(/#\/m\/(\d+)/);window.scrollTo(0,0);h?mod(+h[1]):home();updStat()}
addEventListener('hashchange',route);
addEventListener('scroll',()=>{const d=document.documentElement;$('#rp').style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight||1)*100)+'%'},{passive:true});
$('#theme').onclick=()=>{const t=document.documentElement.dataset.t==='dark'?'light':'dark';document.documentElement.dataset.t=t;sv('hra_t',t)};
document.documentElement.dataset.t=ld('hra_t',matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
route();
