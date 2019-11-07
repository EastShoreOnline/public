window.setTimeout(function(){
    alert('yo');
    var trigger_element = document.getElementById("triggers")
    var trigger_times = trigger_element.getAttribute("data-times")
    var trigger_vars = trigger_element.getAttribute("data-vars")
    var my_video = document.getElementById("my_video")
    
    my_video.addEventListener("timeupdate", function(){
    if(this.currentTime >= trigger_times*1) {
        this.pause();
        console.log(trigger_vars)
       parent.parent.postMessage(trigger_vars,'*')
    }
        
});

},1000);
