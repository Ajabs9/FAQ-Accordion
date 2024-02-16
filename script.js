document.addEventListener('DOMContentLoaded', function() {
    const btnShow = document.getElementById('btnShow');
    const addInfo = document.getElementById('addInfo');
    const content = document.getElementById('content');

    btnShow.addEventListener('click', function() {
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
    });
});
