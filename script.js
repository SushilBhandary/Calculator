
let str = ''


function insert(num){
  const view = document.querySelector('.textview')
  str += num.toString();
  view.value = str
}
  
function equals(){
  const view = document.querySelector('.textview')
  str =  eval(str).toString()
  view.value = str
      
}
  
function clean(){
  const view = document.querySelector('.textview')
  str = '';
  view.value = str
}
  
function back(){
  const view = document.querySelector('.textview')
  str = str.slice(0, -1);
  view.value = str
}
   