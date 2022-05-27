
console.log('js is connected');

const inpt=document.querySelector('.inptext');
const out1=document.querySelector('.out1');
const inpt2=document.querySelector('.inptext2');
const btn2=document.querySelector('.inp__button');
const out2=document.querySelector('.out2');

inpt.addEventListener('change', (ev)=> {
  const text1=ev.target.value;
  out1.innerHTML=text1;
})

btn2.addEventListener('click', ()=> {
  const text2=inpt2.value;
  out2.innerHTML=text2; 
})