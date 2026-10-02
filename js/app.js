const M=[
["مقدمة في الموارد البشرية والاستراتيجية","Introduction to HRM & HR Strategy","التأسيس الاستراتيجي","Strategic Foundation","فهم فجوة المواءمة الاستراتيجية، إطار POLC، رأس المال البشري، والهرم الاستراتيجي ونموذج SWOT.","Strategic alignment gaps, POLC framework, human capital theory and the Strategic Pyramid.","https://saba-global-apps.github.io/Module1---Intro-to-HRM-Strategy/"],
["الاستقطاب والاختيار والتعيين","Recruitment & Talent Selection","إدارة المواهب","Talent Acquisition","تحليل وتوصيف الوظائف، قنوات الاستقطاب، المقابلات المبنية على الكفاءات، وفلاتر الاختيار.","Job analysis, sourcing channels, competency-based interviews and selection filters.","https://saba-global-apps.github.io/Module-2---Recruitment-Selection/"],
["قانون العمل والامتثال القانوني","Labor Law & Legal Compliance","الشؤون القانونية","Legal Compliance","صياغة عقود العمل، الإجازات، التحقيق والجزاءات، وإنهاء الخدمة وفقاً للقانون.","Contracts, statutory leaves, disciplinary procedures and compliant termination.","https://saba-global-apps.github.io/Module-3---Labor-Law-/"],
["التأمينات الاجتماعية والرعاية","Social Insurance & Regulations","الامتثال والتشريعات","Statutory Regulations","الاشتراكات التأمينية، نسب صاحب العمل والعامل، استمارات 1 و2 و6، وإصابات العمل والتقاعد.","Contributions, Forms 1/2/6, workplace injuries and retirement schemes.","https://saba-global-apps.github.io/Module-4---Social-Insurance/"],
["إدارة الأجور والمرتبات وإكسيل للـ HR","Payroll Management & Excel for HR","العمليات المالية","Payroll Operations","حساب البدلات والاستقطاعات وضريبة كسب العمل وشيت المرتبات ومعادلات إكسيل المتقدمة.","Allowances, deductions, income tax, payslips and advanced Excel formulas.","https://saba-global-apps.github.io/Module-5---Payroll-Management-Excel-for-HR/"],
["إدارة وتقييم الأداء المؤسسي","Performance Management & Appraisals","تطوير الأداء","Performance & KPIs","بناء مؤشرات الأداء KPIs، نماذج التقييم السنوي، وتغذية الأداء الراجعة.","Measurable KPIs, OKRs, 360 feedback and constructive appraisal meetings.","https://saba-global-apps.github.io/Module-6---Performance-Management-Appraisals/"],
["التدريب والتطوير وإدارة المواهب","Training, Development & Talent","بناء القدرات","Talent Development","تحديد الاحتياجات التدريبية TNA، نموذج كيركباتريك، وخطط التعاقب الوظيفي.","Training needs analysis, Kirkpatrick model, learning journeys and succession planning.","https://saba-global-apps.github.io/Module-7-Training-Development-Talent-Management/"],
["التعويضات والمزايا وأنظمة التحفيز","Compensation, Motivation & Benefits","المكافآت الإجمالية","Total Rewards","هيكلة الأجور، الحوافز المادية والمعنوية، والعدالة الداخلية والمنافسة الخارجية.","Salary grading, comp-ratio, incentives, benefits and retention strategy.","https://saba-global-apps.github.io/Module-8-Compensation-Motivation-and-Benefits/"],
["أسس ومبادئ التطوير التنظيمي","Organizational Development Foundation","الهيكل والثقافة","Org Architecture","تصميم الهياكل التنظيمية، إدارة التغيير، ومواءمة الثقافة مع استراتيجية النمو.","Structure design, change management and culture alignment.","https://saba-global-apps.github.io/Module-9-Organizational-Development-Foundation/"],
["الذكاء الاصطناعي في الموارد البشرية","AI in Human Resources","المستقبل والابتكار","Future of Work & AI","أدوات الذكاء الاصطناعي التوليدي، تحليل بيانات الكفاءات، وأتمتة مهام التوظيف والتطوير.","Generative AI, people analytics and automation of recruiting and L&D tasks.","https://saba-global-apps.github.io/Module-10---AI/"],
["مهارات الأعمال والتطوير المهني","Business Skills & Career Development","الاحترافية المهنية","Professional Growth","التفاوض، العرض والتقديم، الذكاء العاطفي، والارتقاء كشريك أعمال استراتيجي HRBP.","Negotiation, presenting, emotional intelligence and moving into an HRBP role.","https://saba-global-apps.github.io/Module-11---Business-Skills-Career-Development/"]
].map((m,i)=>({id:i+1,t:[m[0],m[1]],c:[m[2],m[3]],d:[m[4],m[5]],url:m[6]}));

'use strict';
const T={ar:{title:"بوابة الموارد البشرية الشاملة",sub:"11 موديول • دبلوم الموارد البشرية",search:"ابحث في الموديولات...",count:"11 موديول متاح",reset:"تصفير التقدم",mark:"تعليم كمكتمل",doneL:"مكتمل ✓",lang:"English",home:"الرئيسية",hero:"رحلتك المهنية في الموارد البشرية، موديول بعد موديول",heroP:"تابع كل المسارات من مكان واحد، وسيُحفظ تقدمك تلقائياً على هذا المتصفح.",start:"ابدأ الآن",cont:"أكمل من حيث توقفت",open:"افتح الموديول",none:"لا توجد نتائج مطابقة",ok:"أحسنت! تم إنجاز الموديول",undo:"تم إلغاء الإنجاز",cleared:"تم تصفير التقدم"},
en:{title:"Comprehensive HR Master Portal",sub:"11 Modules • HR Diploma",search:"Search modules...",count:"11 modules available",reset:"Reset progress",mark:"Mark complete",doneL:"Completed ✓",lang:"العربية",home:"Home",hero:"Your HR career path, one module at a time",heroP:"Follow every track from one place. Your progress is saved in this browser.",start:"Start now",cont:"Continue where you left off",open:"Open module",none:"No matching modules",ok:"Great! Module completed",undo:"Completion removed",cleared:"Progress reset"}};

const $=id=>document.getElementById(id);
let lang=localStorage.getItem('hr_lang')||'ar',cur=-1,filter='';
let done=new Set(JSON.parse(localStorage.getItem('hr_done')||'[]'));
let last=+localStorage.getItem('hr_last')||0;
const L=()=>lang==='ar'?0:1, t=k=>T[lang][k];
const save=()=>localStorage.setItem('hr_done',JSON.stringify([...done]));

function renderList(){
  const q=filter.toLowerCase();
  const arr=M.filter(m=>!q||(m.t.join(' ')+m.d.join(' ')).toLowerCase().includes(q));
  $('list').innerHTML=arr.map((m,i)=>`<button class="item ${cur===m.id-1?'on':''} ${done.has(m.id)?'done':''}" style="animation-delay:${i*40}ms" data-i="${m.id-1}"><span class="num">${done.has(m.id)?'✓':m.id}</span><span><b>${m.t[L()]}</b><small>${m.c[L()]}</small></span></button>`).join('')||`<p style="color:#8fa1ba;text-align:center;padding:24px;font-size:13px">${t('none')}</p>`;
}
function renderHome(){
  const p=Math.round(done.size/M.length*100);
  const next=done.size===M.length?0:(M.findIndex(m=>!done.has(m.id)));
  $('homeView').innerHTML=`<div class="home"><div class="hero"><div><h3>${t('hero')}</h3><p>${t('heroP')}</p><button class="go" data-i="${done.size?Math.max(next,0):0}">${done.size?t('cont'):t('start')}</button></div>
  <div class="donut"><svg viewBox="0 0 120 120"><circle class="t" cx="60" cy="60" r="50"/><circle class="p" id="arc" cx="60" cy="60" r="50"/></svg><span id="pct">0%</span></div></div>
  <div class="grid">${M.map((m,i)=>`<button class="card ${done.has(m.id)?'done':''}" data-i="${i}" style="animation-delay:${i*60}ms"><div class="top"><span class="n">${done.has(m.id)?'✓':m.id}</span><span class="tag">${m.c[L()]}</span></div><h4>${m.t[L()]}</h4><p>${m.d[L()]}</p><div class="open">${t('open')} <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></button>`).join('')}</div></div>`;
  requestAnimationFrame(()=>setTimeout(()=>{ $('arc').style.strokeDashoffset=314-314*p/100; count(p); },60));
}
function count(to){let n=0;const el=$('pct');const s=setInterval(()=>{n=Math.min(n+2,to);el.textContent=n+'%';if(n>=to)clearInterval(s)},20);if(!to)el.textContent='0%'}
function progress(){const p=Math.round(done.size/M.length*100);$('bar').style.width=p+'%'}
function doneBtn(){
  const d=cur>=0&&done.has(cur+1);
  ['done','mDone'].forEach(id=>{const b=$(id);b.className='pill'+(d?' ok':'');b.textContent=d?t('doneL'):t('mark')});
}
function go(i){
  if(i<0||i>=M.length)return;
  cur=i;last=i;localStorage.setItem('hr_last',i);
  const m=M[i];
  $('cur').textContent=`${m.id}. ${m.t[L()]}`;
  $('ext').href=m.url;
  ['done','reload','ext','full','prev','next'].forEach(id=>$(id).style.display='');
  $('prev').disabled=$('mPrev').disabled=i===0;$('next').disabled=$('mNext').disabled=i===M.length-1;document.body.classList.add('inmod');
  $('loader').classList.remove('off');$('frame').src=m.url;
  $('homeView').classList.add('hide');$('modView').classList.remove('hide');
  doneBtn();renderList();closeSide();
}
function home(){
  cur=-1;document.body.classList.remove('inmod');$('cur').textContent=t('home');
  ['done','reload','ext','full','prev','next'].forEach(id=>$(id).style.display='none');
  $('modView').classList.add('hide');$('homeView').classList.remove('hide');
  $('frame').src='about:blank';renderHome();renderList();closeSide();
}
function toast(msg){const e=$('toast');e.textContent=msg;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),2600)}
function applyLang(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  $('tTitle').textContent=t('title');$('tSub').textContent=t('sub');$('q').placeholder=t('search');
  $('tCount').textContent=t('count');$('reset').textContent=t('reset');$('lang').textContent=t('lang');
  document.title=t('title');
  cur>=0?go(cur):home();progress();
}
function openSide(){$('side').classList.add('open');$('back').classList.add('show')}
function closeSide(){$('side').classList.remove('open');$('back').classList.remove('show')}

$('list').onclick=e=>{const b=e.target.closest('[data-i]');if(b)go(+b.dataset.i)};
$('homeView').onclick=e=>{const b=e.target.closest('[data-i]');if(b)go(+b.dataset.i)};
$('frame').onload=()=>setTimeout(()=>$('loader').classList.add('off'),300);
$('q').oninput=e=>{filter=e.target.value.trim();renderList()};
$('homeBtn').onclick=home;
$('prev').onclick=$('mPrev').onclick=()=>go(cur-1);$('next').onclick=$('mNext').onclick=()=>go(cur+1);
$('reload').onclick=()=>{$('loader').classList.remove('off');$('frame').src=M[cur].url};
$('full').onclick=()=>document.fullscreenElement?document.exitFullscreen():$('modView').requestFullscreen?.();
$('done').onclick=$('mDone').onclick=()=>{const id=cur+1;if(done.has(id)){done.delete(id);toast(t('undo'))}else{done.add(id);toast(t('ok'))}save();doneBtn();renderList();progress()};
$('reset').onclick=()=>{done.clear();save();progress();doneBtn();cur>=0?renderList():home();toast(t('cleared'))};
$('lang').onclick=()=>{lang=lang==='ar'?'en':'ar';localStorage.setItem('hr_lang',lang);applyLang()};
$('theme').onclick=()=>{const d=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=d?'light':'dark';localStorage.setItem('hr_theme',d?'light':'dark')};
$('menuBtn').onclick=openSide;$('back').onclick=closeSide;
addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT'||cur<0)return;
  const rtl=lang==='ar';
  if(e.key==='ArrowLeft')go(cur+(rtl?1:-1));
  if(e.key==='ArrowRight')go(cur+(rtl?-1:1));
});

document.documentElement.dataset.theme=localStorage.getItem('hr_theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
applyLang();