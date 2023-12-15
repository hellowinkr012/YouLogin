
var login={
    "button":document.getElementById("login-button"),
    "form":document.querySelector("form"),
}

function initiateLogin(down) {
    if (down) {
        login["button"].classList.remove("pop-in-1");
        login["button"].classList.add("pop-out-1");
        login["form"].classList.add("slide-up-2");
        login["button"].style.color="var(--color-4-light)";
        
    }

    else {
        login["button"].classList.remove("pop-out-1");
        login["button"].classList.add("pop-in-1");
        login["form"].classList.remove("slide-up-2");
    }

    login["button"].removeEventListener("click",function() {initiateLogin(down)});
    login["button"].addEventListener("click",function() {initiateLogin(Math.abs(down-1))});
}

login["button"].addEventListener("click",function() {initiateLogin(1)});

