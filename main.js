let text="alsafwa hospital";
let i=0;

 setInterval(function() {
document.getElementById("title").textContent=text.slice(0,i);
i=i+1;
if(i>text.length -1){
   i=0;
}
},500);



let landingbage = document.getElementById("landing-bage");

let imgarray =["back-ground-1.jpg","back-ground-2.jpg","back-ground-3.png"];


setInterval(function() {
let  randomnum = Math.floor(Math.random() * imgarray.length);

landingbage.style.backgroundImage='url("images/'+imgarray[randomnum]+'")';

},5000);

let up=document.getElementById("up");
let aboutus=document.getElementById("about-us");
let about=document.getElementById("about");
let textt=document.getElementById("text");
let pic=document.getElementById("pic");
let services=document.getElementById("services");
let service=document.getElementById("service");
let Testimonials=document.getElementById("Testimonials");
let opinion=document.getElementById("opinion");
let box=document.getElementsByClassName("box");
let team=document.getElementById("team");
let our=document.getElementById("our");
let booking=document.getElementById("booking");
let book=document.getElementById("book");

window.onscroll=function(){
    if(this.scrollY >200){
        up.classList.add("top-show");
      }else{
        up.classList.remove("top-show");
      }
    if(window.scrollY>about.offsetTop -300){
        aboutus.classList.add("about-show");
        textt.classList.add("text-show");
        pic.classList.add("imgshow");
    }
    if(window.scrollY>services.offsetTop -400){
        service.classList.add("service-show");
    }
    if(window.scrollY>Testimonials.offsetTop -400){
        opinion.classList.add("opinion-show");
        for(let i=0;i<box.length;i++){
            box[i].classList.add("box-show");
        }
    }
    if(window.scrollY>team.offsetTop -400){
        our.classList.add("our-show");
    }
    if(window.scrollY>booking.offsetTop -400){
        book.classList.add("book-show");
    }
}

up.onclick=function(){
    window.scrollTo({
        top:0,
    });
}