$(document).ready(function(){
    $('.dropdown-toggle').dropdown()
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

let  content=document.getElementById("avinash").innerHTML;
console.log(content);
for(i=0;i<content.length;i++)
{
if (content[i]=='1')
   {
   let p=document.querySelector(".a a");
   p.setAttribute("href","");
   let c=document.querySelector(".a");
   c.classList.add("done");
   }
if (content[i]=='2')
   {
   let p=document.querySelector(".b a");
   p.setAttribute("href","");
   let c=document.querySelector(".b");
   c.classList.add("done");
   
   } 
if (content[i]=='3')
   {
   let p=document.querySelector(".c a");
   p.setAttribute("href","");
   let c=document.querySelector(".c");
   c.classList.add("done");
   
   } 
if (content[i]=='4')
   {
   let p=document.querySelector(".d a");
   p.setAttribute("href","");
   let c=document.querySelector(".d");
   c.classList.add("done");
   }
}
