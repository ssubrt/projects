// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });




function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation();


function navbarAnimation(){

    gsap.to("#nav-part1 svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            marker:true,
            start:"top 0",
            end:"top -7%",
            scrub:true
        }
    })
    gsap.to("#nav-part2 #links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })

}

navbarAnimation();




function videoconAnimation(){
    var videoCon = document.querySelector("#video-container");
var playBtn = document.querySelector("#play");
videoCon.addEventListener("mouseenter",(e)=>{
    // playBtn.style.opacity = 1;
    // playBtn.style.scale = 1;

    gsap.to(playBtn,{
        scale:1,
        opacity:1
    })
})


videoCon.addEventListener("mouseleave",(e)=>{
    gsap.to(playBtn,{
        scale:0,
        opacity:0
    })

})

//mousepointer ke sath move hoga uska code
videoCon.addEventListener("mousemove",(e)=>{
    gsap.to(playBtn,{
        left:e.x-50,
        top:e.y-90
    })

})



}

videoconAnimation();

function loadingAnimation(){
    
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
})

gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.4,
    stagger:0.5
})

}

loadingAnimation();



function cursorAnimation(){


// document.querySelector("#child1").addEventListener("mouseenter",(e)=>{
//     gsap.to("#cursor",{
//         transform:'translate(-50%,-50%) scale(1)'
//     })
// })


// document.querySelector("#child1").addEventListener("mouseleave",(e)=>{
//     gsap.to("#cursor",{
//         transform:'translate(-50%,-50%) scale(0)'
//     })
// })

let page3 = document.getElementById("page-3");
page3.addEventListener("mousemove", (dets) => {
  gsap.to("#cursor", {
    x: dets.x,
    y: dets.y,
  });
});

document.getElementById("child-1").addEventListener("mouseenter", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(1)",
    backgroundColor: "gray",
  });
});

document.getElementById("child-1").addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(0)",
    backgroundColor: "transparent",
  });
});

document.getElementById("child-2").addEventListener("mouseenter", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(1)",
    backgroundColor: "blanchedalmond",
  });
});

document.getElementById("child-2").addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(0)",
    backgroundColor: "transparent",
  });
});
document.getElementById("child-3").addEventListener("mouseenter", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(1)",
    backgroundColor: "blanchedalmond",
  });
});

document.getElementById("child-3").addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(0)",
    backgroundColor: "transparent",
  });
});
document.getElementById("child-4").addEventListener("mouseenter", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(1)",
    backgroundColor: "green",
  });
});

document.getElementById("child-4").addEventListener("mouseleave", () => {
  gsap.to("#cursor", {
    transform: "translate(-50%,-50%) scale(0)",
    backgroundColor: "transparent",
  });
});


}

cursorAnimation();



