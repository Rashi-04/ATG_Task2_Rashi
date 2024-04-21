var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: '200%', // the scene should last for a scroll distance of 200% of the viewport height
    triggerElement: "#center-div", // this is the trigger element for the pinned section
    triggerHook: "onLeave" // this will trigger the pinning when the "#center-div" leaves the view
})
    .setPin("#center-div") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller




let text = document.querySelector("h1");


window.addEventListener("scroll", () => {
    if(window.scrollY < 700){
        text.innerHTML = "UX Strategy";
    }
    else if(window.scrollY > 700 && window.scrollY < 1400){
        text.innerHTML = "NASA";
    }
    else if(window.scrollY > 1400 && window.scrollY < 2100){
        text.innerHTML = "Blockchain";
    }
    else if(window.scrollY > 2100 && window.scrollY < 2800){
        text.innerHTML = " 25+ Downloads";
    }
    else if(window.scrollY > 2800 && window.scrollY < 3500){
        text.innerHTML = "Text Headline";
    }
    else if(window.scrollY > 3500 && window.scrollY < 4200){
        text.innerHTML = " East Asia";
    }
    else{
        text.innerHTML = "North America";
    }
})

let paths = document.querySelectorAll("path");

fillSvgPaths();

document.addEventListener("scroll", fillSvgPaths);


function fillSvgPaths() {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];

        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage;

        path.style.strokeDashoffset = pathLength - drawLength;

    }
}