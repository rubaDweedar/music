const body=document.body.style;

let currentwallpaper=1;
let no=4;
let circle=[];
let nums=[];
for(let i=0;i<3;i++){
    nums[i]=document.getElementById("no"+(i+1));
}

for(let i=0;i<no;i++){
    circle[i]=document.createElement("i");
    circle[i].classList.add("fas","fa-circle","text-muted","px-2");
    circle[i].id="circle"+(i+1);
    circels.appendChild(circle[i]);
}

body.backgroundImage = "url('wallpaper-"+currentwallpaper+".jpg')";
body.backgroundRepeat="no-repeat";
body.backgroundSize="cover";

circle[0].classList.remove("text-muted");
circle[0].classList.add("text-light");

function changeBgPhoto(){
    if(currentwallpaper === no){
        currentwallpaper=1;
        body.backgroundImage= "url('wallpaper-"+currentwallpaper+".jpg')";
        circle[0].classList.remove("text-muted");
        circle[0].classList.add("text-light");
        circle[no-1].classList.remove("text-light");
        circle[no-1].classList.add("text-muted");
    }else{
        circle[currentwallpaper-1].classList.remove("text-light");
        circle[currentwallpaper-1].classList.add("text-muted");
        circle[currentwallpaper].classList.remove("text-muted");
        circle[currentwallpaper].classList.add("text-light");
        currentwallpaper++;
        body.backgroundImage= "url('wallpaper-"+currentwallpaper+".jpg')";
    }
}
arrow1.addEventListener("click", function(){
if(currentwallpaper === 1){
        body.backgroundImage= "url('wallpaper-"+no+".jpg')";
        circle[0].classList.remove("text-light");
        circle[0].classList.add("text-muted");
        circle[no-1].classList.remove("text-muted");
        circle[no-1].classList.add("text-light");
        currentwallpaper=no;
    }else{
        currentwallpaper--;
        circle[currentwallpaper].classList.remove("text-light");
        circle[currentwallpaper].classList.add("text-muted");
        circle[currentwallpaper-1].classList.remove("text-muted");
        circle[currentwallpaper-1].classList.add("text-light");
        body.backgroundImage= "url('wallpaper-"+currentwallpaper+".jpg')";
  }
})

arrow2.addEventListener("click",changeBgPhoto)
const interval = setInterval(changeBgPhoto, 5000);

let random=Math.floor(Math.random()*3)+1;
let audio = new Audio("outlandish-"+random+".mp3");
function play(){
    audio.play();
    playMusic.classList.remove("fa-play-circle");
    playMusic.classList.add("fa-pause-circle");
    nums[random-1].classList.remove("text-muted");
    nums[random-1].style.color="#f4a261";      
}
function pause(){
    if(playMusic.classList.contains("fa-pause-circle")){
        nums[random-1].classList.add("text-muted");
        audio.pause();
        playMusic.classList.add("fa-play-circle");
        playMusic.classList.remove("fa-pause-circle");
    } 
}
playMusic.addEventListener("click",function(){   
    if(playMusic.classList.contains("fa-play-circle")){
        play();
    }else{
        pause();
    }  
})
changeMusic.addEventListener("click",function(){
    pause();
    random=Math.floor(Math.random()*3)+1;
    audio = new Audio("outlandish-"+random+".mp3");
    play();
})
