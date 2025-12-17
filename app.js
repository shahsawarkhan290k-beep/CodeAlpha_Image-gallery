const fullview=document.querySelector(".fullimageshow");
const fullimage=document.getElementById("FullImage");
const nextbtn=document.getElementById("next");
const prevbtn=document.getElementById("prev");
const closebtn=document.getElementById("close");
const slider=document.querySelector(".slider");
function FullView(ImgLink){
  fullimage.src=ImgLink;
fullview.style.display="block";
}
closebtn.addEventListener("click",()=>{
  fullview.style.display="none";
});


