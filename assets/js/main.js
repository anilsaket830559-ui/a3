(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var C=['#8E6BB8','#8FA98A','#E0A458','#D97C7C','#5FA8B8','#B88E6B'];
if($('pl-g')){var U=[['History of Ideas',6,12],['Statistics I',8,13],['Academic Writing',4,10],['Research Methods',9,14]],ue=$('pl-u');
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function draw(){ue.innerHTML=U.map(function(u,k){return '<div class="sy-unit"><i style="background:'+C[k%6]+'"></i><label>Unit name<input type="text" data-k="'+k+'" data-f="0" value="'+esc(u[0])+'"></label><label>Assignment due (week)<input type="number" min="1" max="20" data-k="'+k+'" data-f="1" value="'+u[1]+'"></label><label>Final task (week)<input type="number" min="1" max="20" data-k="'+k+'" data-f="2" value="'+u[2]+'"></label><button type="button" data-del="'+k+'" aria-label="Remove '+esc(u[0])+'">&times;</button></div>';}).join('');gantt();}
 function gantt(){var s=new Date($('pl-s').value),e=new Date($('pl-e').value),W=Math.max(4,Math.min(24,Math.round((e-s)/6048e5)+1));if(isNaN(W))W=16;var rw=+$('pl-r').value,xw=+$('pl-x').value,g=$('pl-g'),h='<div class="h n">Unit</div>';
  g.style.gridTemplateColumns='170px repeat('+W+',minmax(34px,1fr))';for(var w=1;w<=W;w++){h+='<div class="h">W'+w+'</div>';}
  function cls(w){return w===rw?' rw':(w>W-xw?' ex':'');}
  U.forEach(function(u,k){h+='<div class="n" title="'+esc(u[0])+'">'+esc(u[0])+'</div>';for(var w=1;w<=W;w++){var due=(w===u[1]||w===u[2]);var teach=w!==rw&&w<=W-xw;h+='<div class="'+(teach?'b':'')+cls(w)+(due?' d':'')+'" style="--c:'+C[k%6]+'"></div>';}});
  g.innerHTML=h;var cnt={};U.forEach(function(u){[u[1],u[2]].forEach(function(x){cnt[x]=(cnt[x]||0)+1;});});var busy=Object.keys(cnt).filter(function(x){return cnt[x]>1;});
  $('pl-n').textContent=W+' weeks in total, '+(W-xw-(rw?1:0))+' teaching weeks. '+(busy.length?'Busy weeks with two or more deadlines: week '+busy.join(', week ')+'. Start those tasks early.':'No week has more than one deadline. Nicely spread.')+' Diamonds mark deadlines; stripes mark reading week; pink is the exam period.';}
 ue.addEventListener('input',function(ev){var t=ev.target,k=t.getAttribute('data-k');if(k===null)return;var f=+t.getAttribute('data-f');U[k][f]=f?Math.max(1,Math.min(24,+t.value||1)):t.value;gantt();});
 ue.addEventListener('click',function(ev){var d=ev.target.getAttribute('data-del');if(d!==null&&U.length>1){U.splice(+d,1);draw();}});
 $('pl-a').addEventListener('click',function(){if(U.length<6){U.push(['New unit',7,13]);draw();}});
 ['pl-s','pl-e','pl-r','pl-x'].forEach(function(i){$(i).addEventListener('change',gantt);});draw();}
var lc=$('ld-c');if(lc){var R=$('ld-r'),r=80,P=2*Math.PI*r;function ld(){var c=+lc.value,m=+$('ld-m').value,w=+$('ld-w').value,s=+$('ld-s').value;$('ld-co').textContent=c;$('ld-mo').textContent=m;$('ld-wo').textContent=w+' h';$('ld-so').textContent=s+' h';
 var parts=[['Class',c,'#8E6BB8'],['Study',c*m,'#F5E14A'],['Work',w,'#E0A458'],['Sleep',s*7,'#8FA98A'],['Meals &amp; chores',21,'#D9CFE6']],used=parts.reduce(function(a,p){return a+p[1];},0),free=168-used,off=0,svg='<circle cx="100" cy="100" r="'+r+'" stroke="#E9E2F1"/>',leg='';
 parts.forEach(function(p){var L=Math.max(0,Math.min(p[1],168))/168*P;svg+='<circle cx="100" cy="100" r="'+r+'" stroke="'+p[2]+'" stroke-dasharray="'+L.toFixed(1)+' '+P.toFixed(1)+'" stroke-dashoffset="'+(-off).toFixed(1)+'"/>';off+=L;leg+='<li><i style="background:'+p[2]+'"></i>'+p[0]+': '+Math.round(p[1])+' h</li>';});
 R.innerHTML=svg;$('ld-l').innerHTML=leg;$('ld-f').textContent=Math.round(free);var v=$('ld-v');v.classList.toggle('w',free<20);v.textContent=free<0?'This week does not fit. Consider fewer credits or fewer work hours.':free<20?'Very tight: under 20 free hours leaves little room for illness or extra reading.':free<40?'Busy but workable. Protect one evening a week for rest.':'A balanced week with plenty of buffer time.';}
 ['ld-c','ld-m','ld-w','ld-s'].forEach(function(i){$(i).addEventListener('input',ld);});ld();}
var gp=$('gp');if(gp){addEventListener('scroll',function(){var h=document.documentElement;gp.style.width=Math.min(100,h.scrollTop/(h.scrollHeight-innerHeight)*100)+'%';},{passive:true});}
})();
