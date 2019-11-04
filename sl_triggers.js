window.setTimeout(function(){
    console.log(document.getElementById("triggers"),window.parent.document);
    var trigger_element = document.getElementById("triggers")
    var trigger_times = trigger_element.getAttribute("data-times")
    var trigger_vars = trigger_element.getAttribute("data-vars")
    var my_video = document.getElementById("my_video")
    
    my_video.addEventListener("timeupdate", function(){
    if(this.currentTime >= trigger_times*1) {
        this.pause();
    }
        
});

},1000);
