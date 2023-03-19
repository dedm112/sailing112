window.addEventListener('load', function () {
    let counter = 0;
    setInterval(() => {
        if (counter == 2) {
            clearInterval();
            document.getElementById("loading_ing").style.opacity = "0";
            document.getElementById("loading_ing").style.zIndex = "-10000";
            document.getElementById("scroll").style.overflow = "scroll";
        }
        else {
            counter += 1;
        }
    }, 500)
})

let bg_navbar = document.getElementById('top_bar');
let a_top = document.getElementById('to_top');
let leftFunction = document.getElementById('leftFunction');
let logo = document.getElementById('logo');

function show() {
    // if(window.scrollY > 1000 ){
    //     a_top.style.opacity = '1';
    //     a_top.style.right = '50px';
    // }
    // if(window.scrollY < 1000 ){
    //     a_top.style.opacity = '0';
    //     a_top.style.right = '-100px';
    // }
    if(window.scrollY > 200){
        bg_navbar.style.background = "rgba(0,0,0,0.5)";
        logo.style.opacity = '1';
    }
    if(window.scrollY < 200){
        bg_navbar.style.background = "none";
        logo.style.opacity = '0';
    }
    if(window.scrollY > 500){
        leftFunction.style.opacity = '1';
    }
    if(window.scrollY < 500){
        leftFunction.style.opacity = '0';
    }
}
function to_top() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}