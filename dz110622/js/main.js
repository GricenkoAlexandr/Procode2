

let base=[];

const inpar=document.querySelector('.inputarea');
const inpbtn=document.querySelector('.btninp');
const out=document.querySelector('.outblock');


inpbtn.addEventListener('click', ()=> {
  if (inpar.value==='') {
    return;
  } else {
    base.push(inpar.value);
  inpar.value='';
  textout(base);
  }
})

const textout=(arr)=> {
  let textarr='';
  for (let i=0; i<arr.length; i++) {
    textarr+='<li>'+arr[i]+'</li>';
  }
  out.innerHTML='<ol>'+textarr+'</ol>';
}
