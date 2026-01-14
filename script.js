function firstWord(s) {
  if(s==='') return '';
  let i=s.indexOf(' ');
  if(i==-1){
    return s;
}
  return s.substring(0,i);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
