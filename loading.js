window.addEventListener("load", function () {
    setTimeout(function () {
        var layar = document.getElementById("loadingscreen");
        if (layar) {
            layar.classList.add("selesai");
        }
    }, 800);
});
