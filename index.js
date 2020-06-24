var visible=false;
 var bttn = document.querySelectorAll('.more-bttn');
for(var i=0; i<bttn.length; i++){
  bttn[i].addEventListener("click",function(){
    var menu=  this.querySelector(".more-menu");
    if(!visible){
      menu.style.opacity=1; 
      visible=true; 
   }  
    else{
    menu.style.opacity=0;   
    visible=false; 
   }
  })
}