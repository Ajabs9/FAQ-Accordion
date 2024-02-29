const btnShow1 = document.getElementById('btnShow1');
const btnShow2 = document.getElementById('btnShow2');
const btnShow3 = document.getElementById('btnShow3');
const btnShow4 = document.getElementById('btnShow4');

function contentDisplay(number){
    const addInfo = document.getElementById('addInfo'+number);
    const content = document.getElementById('content'+number);
    const btnShow = document.getElementById('btnShow'+number);
    if (content.style.display !== "block") {
        addInfo.style.display = "block"
        content.style.display = "block";
        btnShow.style.background = "url(./images/icon-minus.svg)";
        btnShow.style.backgroundRepeat = "no-repeat";
        btnShow.style.backgroundPositionX = "right";
    } else {
        addInfo.style.display = "none";
        content.style.display = "none";
        btnShow.style.background = "url(./images/icon-plus.svg)";
        btnShow.style.backgroundRepeat = "no-repeat";
        btnShow.style.backgroundPositionX = "right";
        console.log("It ran");
    }
}