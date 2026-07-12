const music=document.getElementById('bgMusic');
const stars=[],box=document.getElementById('stars');
for(let i=0;i<450;i++){let s=document.createElement('div');s.className='star';s.style.left=Math.random()*100+'vw';s.style.top=Math.random()*100+'vh';box.appendChild(s);stars.push(s);gsap.to(s,{opacity:0.2+Math.random()*0.8,repeat:-1,yoyo:true,duration:1+Math.random()*2});}
const lines=[
"Dear Dreamer...",
"The stars have waited patiently for you.",
"Only one word may unlock this journey."
];
function typeText(el,text,delay){
 let i=0;
 setTimeout(()=>{
   const t=setInterval(()=>{el.textContent=text.slice(0,++i);if(i>=text.length)clearInterval(t);},35);
 },delay);
}
document.getElementById('start').onclick=()=>{
 const music=document.getElementById('bgMusic');
 if(music){
   music.volume=0;
   music.load();
   music.play().then(()=>{
      gsap.to(music,{volume:0.25,duration:3});
   }).catch(console.error);
 }

 gsap.to('.hero',{opacity:0,duration:1});
 gsap.to('#bg',{scale:1.45,duration:5});
 stars.forEach(s=>gsap.to(s,{left:'50vw',top:'50vh',duration:2+Math.random()*2}));
 setTimeout(()=>{
   gsap.to('#bookWrap',{opacity:1,scale:1,duration:1.2});
   gsap.to('.cover',{rotateY:-165,duration:2});
   typeText(document.getElementById('heading'),lines[0],700);
   typeText(document.getElementById('story'),lines.slice(1).join(' '),1800);
 },4200);
};

const oldUnlock=document.getElementById('unlock');
oldUnlock.onclick=()=>{
 const pw=document.getElementById('pw').value.trim();
 const msg=document.getElementById('msg');
 if(pw==='Animator'){
   msg.textContent='✨ The forest awakens...';
   msg.style.color='green';
   setTimeout(()=>{
     gsap.to('#bookWrap',{opacity:0,duration:1.5,onComplete:()=>{
       document.getElementById('forestScene').style.display='block';
       gsap.from('#forestScene',{opacity:0,duration:2});
       for(let i=0;i<20;i++){
         let b=document.createElement('div');
         b.className='butterfly';
         b.textContent='🦋';
         butterflies.appendChild(b);
         b.style.left='50%'; b.style.top='55%';
         gsap.to(b,{x:(Math.random()-.5)*900,y:(Math.random()-.5)*500,duration:5,repeat:-1,yoyo:true});
       }
       gsap.to('#envelope',{opacity:1,duration:2,delay:1});
     }});
   },1200);
 }else{
   msg.textContent='The stars remain silent...';
   msg.style.color='crimson';
   gsap.fromTo('#book',{x:-8},{x:8,repeat:5,yoyo:true,duration:0.05});
 }
};



// ---- V7 Letter Integration ----
const __msg=`Happy Birthday, Pippo!

May every action take you one step closer to your Dream.

Never stop dreaming.
Never stop creating.

This little magical world was made especially for you.
Ok Comeback lets talk!

— Lukesh 💙`;

function openBirthdayLetter(){
 const overlay=document.getElementById("letterOverlay");
 if(!overlay) return;
 overlay.style.display="flex";
 const out=document.getElementById("typedLetter");
 out.textContent="";
 let i=0;
 const t=setInterval(()=>{
   out.textContent=__msg.substring(0,i++);
   if(i>__msg.length) clearInterval(t);
 },28);
}
document.addEventListener("click",e=>{
 if(e.target && (e.target.id==="envelope" || e.target.id==="openLetter")){
    openBirthdayLetter();
 }
 if(e.target && e.target.id==="closeLetter"){
    document.getElementById("letterOverlay").style.display="none";
 }
});
