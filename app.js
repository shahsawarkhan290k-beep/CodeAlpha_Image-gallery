const fullview=document.querySelector(".fullimageshow");
const images=document.querySelectorAll(".images img");
const fullimage=document.getElementById("FullImage");
const nextbtn=document.getElementById("next");
const prevbtn=document.getElementById("prev");
const closebtn=document.getElementById("close");
let currpic=0;
function FullView(ImgLink){
  fullimage.src=ImgLink;
fullview.style.display="block";
}
closebtn.addEventListener("click",()=>{
  fullview.style.display="none";
});
  images.forEach((img,curr)=>{
      if(fullimage.src===currpic){
currpic=curr;
      }
  });
nextbtn.onclick = function () {
  currpic++;
  if (currpic >= images.length) {
    currpic = 0; 
  }
  fullimage.src = images[currpic].src;
};
prevbtn.onclick=function (){
  currpic--;
  if(currpic>=images.length){
    currpic=0;    
  }
  fullimage.src=images[currpic].src;
};

