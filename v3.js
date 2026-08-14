(()=>{
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const clients={gmail:{name:'Gmail',className:'gmail'},outlook:{name:'Outlook',className:'outlook'},apple:{name:'Apple Mail',className:'apple'}};
const audience=[
{name:'Alex Morgan',segment:'VIP',rsvp:'Confirmed',journey:'Confirmation'},
{name:'Mara Ionescu',segment:'Creator',rsvp:'Confirmed',journey:'Reminder'},
{name:'Daniel Pop',segment:'Creator',rsvp:'Pending',journey:'Reminder'},
{name:'Sofia Marin',segment:'VIP',rsvp:'Confirmed',journey:'Event'},
{name:'Theo Adams',segment:'Creator',rsvp:'Waitlist',journey:'Confirmation'},
{name:'Elena Radu',segment:'Guest',rsvp:'Confirmed',journey:'Thank-you'},
{name:'Victor Lane',segment:'Guest',rsvp:'Pending',journey:'Confirmation'},
{name:'Ana Pavel',segment:'VIP',rsvp:'Confirmed',journey:'Event'}
];
function syncClientMirror(){
 const preview=$('#clientPreview'); if(!preview) return;
 const subj=$('#inboxSubject')?.textContent||"You're confirmed";
 const snip=$('#inboxSnippet')?.textContent?.replace(/^—\s*/, '')||'';
 $('#clientSubject').textContent=subj; $('#clientSnippet').textContent=snip;
 const card=$('#emailCard'); const mirror=$('#clientEmailMirror');
 if(card&&mirror){const clone=card.cloneNode(true);clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));mirror.innerHTML='';mirror.appendChild(clone);}
}
$$('.client-btn').forEach(btn=>btn.addEventListener('click',()=>{
 $$('.client-btn').forEach(x=>x.classList.toggle('active',x===btn));
 const c=clients[btn.dataset.client]; const p=$('#clientPreview');
 p.classList.remove('gmail','outlook','apple'); p.classList.add(c.className); $('#clientName').textContent=c.name;
 localStorage.setItem('juniper-client',btn.dataset.client); syncClientMirror();
}));
function applySavedClient(){const key=localStorage.getItem('juniper-client')||'gmail';$(`.client-btn[data-client="${key}"]`)?.click()}
const observer=new MutationObserver(()=>syncClientMirror());
['emailTitle','introCopy','perkCopy','inboxSubject','inboxSnippet','statusBadge','variantLabel'].forEach(id=>{const el=$('#'+id);if(el)observer.observe(el,{subtree:true,childList:true,characterData:true})});
['nameInput','dateInput','locationInput','codeInput','statusSelect'].forEach(id=>$('#'+id)?.addEventListener('input',()=>setTimeout(syncClientMirror,0)));

const defaultOrder=['status','headline','ticket','perk','cta'];
let blockOrder=(()=>{try{const v=JSON.parse(localStorage.getItem('juniper-block-order'));return Array.isArray(v)&&v.length===5?v:defaultOrder}catch{return defaultOrder}})();
function emailNodes(){return {status:[$('#statusBadge')],headline:[$('#emailTitle'),$('#introCopy')],ticket:[$('#editableEmailBody .ticket')],perk:[$('#editableEmailBody .perk')],cta:[$('#cta')]}}
function applyEmailOrder(){const body=$('#editableEmailBody'), nodes=emailNodes(); if(!body)return; blockOrder.forEach(key=>(nodes[key]||[]).forEach(el=>el&&body.insertBefore(el,$('#semantic'))));$('#blockOrderText').textContent=blockOrder.join(' → ');localStorage.setItem('juniper-block-order',JSON.stringify(blockOrder));body.classList.remove('block-order-flash');void body.offsetWidth;body.classList.add('block-order-flash');syncClientMirror()}
function renderBlockList(){const list=$('#blockList');if(!list)return;const map=Object.fromEntries($$('.block-item',list).map(el=>[el.dataset.block,el]));blockOrder.forEach(k=>map[k]&&list.appendChild(map[k]));$('#blockOrderText').textContent=blockOrder.join(' → ')}
function moveBlock(key,delta){const i=blockOrder.indexOf(key),j=i+delta;if(i<0||j<0||j>=blockOrder.length)return;[blockOrder[i],blockOrder[j]]=[blockOrder[j],blockOrder[i]];renderBlockList();applyEmailOrder()}
$('#blockList')?.addEventListener('click',e=>{const b=e.target.closest('[data-move]');if(!b)return;const item=b.closest('.block-item');moveBlock(item.dataset.block,b.dataset.move==='up'?-1:1)});
let dragged=null;
$$('.block-item').forEach(item=>{item.addEventListener('dragstart',()=>{dragged=item;item.classList.add('dragging')});item.addEventListener('dragend',()=>{item.classList.remove('dragging');dragged=null});item.addEventListener('dragover',e=>{e.preventDefault();if(!dragged||dragged===item)return;const list=$('#blockList'),rect=item.getBoundingClientRect();list.insertBefore(dragged,e.clientY<rect.top+rect.height/2?item:item.nextSibling)});item.addEventListener('drop',()=>{blockOrder=$$('.block-item').map(x=>x.dataset.block);applyEmailOrder()})});
$('#resetBlocks')?.addEventListener('click',()=>{blockOrder=[...defaultOrder];renderBlockList();applyEmailOrder()});
renderBlockList();setTimeout(applyEmailOrder,0);

function rsvpClass(v){return v.toLowerCase()==='pending'?'pending':''}
function renderCRM(){const q=($('#crmSearch')?.value||'').toLowerCase(),f=$('#crmFilter')?.value||'all';const rows=audience.filter(a=>{const text=`${a.name} ${a.segment} ${a.rsvp} ${a.journey}`.toLowerCase();const matchQ=text.includes(q);const matchF=f==='all'||a.segment.toLowerCase()===f||(f==='pending'&&a.rsvp==='Pending');return matchQ&&matchF});$('#crmRows').innerHTML=rows.map(a=>`<tr><td><strong>${a.name}</strong></td><td><span class="segment-tag">${a.segment}</span></td><td><span class="rsvp-tag ${rsvpClass(a.rsvp)}">${a.rsvp}</span></td><td>${a.journey}</td></tr>`).join('')||'<tr><td colspan="4">No matching contacts.</td></tr>'}
$('#crmSearch')?.addEventListener('input',renderCRM);$('#crmFilter')?.addEventListener('change',renderCRM);renderCRM();
function animateNumber(el,to,duration=750){const start=performance.now();function tick(now){const p=Math.min(1,(now-start)/duration);el.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
$('#simulateSend')?.addEventListener('click',()=>{const delivered=241,opened=187,clicked=119;animateNumber($('#crmDelivered'),delivered);animateNumber($('#crmOpened'),opened);animateNumber($('#crmClicked'),clicked);$('#deliveryLog').textContent=`Simulation complete · ${delivered}/248 delivered · ${opened} opened · ${clicked} clicked · no real emails were sent.`;$('#deliveryState').textContent='Delivered';$('#openState').textContent='Opened';localStorage.setItem('juniper-last-simulation',new Date().toISOString())});

const historyCmd=$('#commandList');
document.addEventListener('keydown',e=>{if((e.key==='v'||e.key==='V')&&!/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName||'')){location.hash='versionHistory'}});
applySavedClient();setTimeout(syncClientMirror,50);
})();
