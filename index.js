window.onload = function () {
    // var items = document.getElementsByClassName("fullscreen")
    // console.log(items)

    // for (var i = 0; i < items.length; i++) {
    //     items[i].style.height = window.innerHeight.toString() + "px"
    //     items[i].style.width = window.innerWidth.toString() + "px"
    // }
    document.getElementsByClassName("loader")[0].classList.add("hide");
}

var onVideo = function () {
    console.log("SHOW")
    document.getElementById("video").classList.remove("hidden")
    document.getElementById("video").classList.add("show")
}