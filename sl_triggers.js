window.setTimeout(function(){
    var trigger_element = document.getElementById("triggers");
    
    console.log(trigger_element.getAttribute("data-times"));
    var trigger_times = ''+trigger_element.getAttribute("data-times");
    var trigger_vars = ''+trigger_element.getAttribute("data-vars");
    if(trigger_times.indexOf(',')==-1){
        trigger_times=[trigger_times];   
    }
    else{
       trigger_times=trigger_times.split(',');   
    }
    if(trigger_vars.indexOf(',')==-1){
        trigger_vars=[trigger_vars];   
    }
    else{
        trigger_vars=trigger_vars.split(',');   
    }
    console.log(trigger_times,trigger_vars);
    if(trigger_times.length!=trigger_vars.length){
     alert("The number of video triggers does not match the number of variables.")   
    }
    var my_video = document.getElementById("my_video")
    var trigger_array = [];
    var this_time;
    var this_var;
    for(var a=0; a<trigger_times.length; a++){
        trigger_array[a]=0;
    }      
    my_video.addEventListener("timeupdate", function(){
        for(a=0; a<trigger_times.length; a++){
            console.log(this.currentTime,trigger_times[a]*1,trigger_array[a]);
            if(this.currentTime >= trigger_times[a]*1 && trigger_array[a]==0) {
                this.pause();
                parent.postMessage(this_var,'*');
                trigger_array[a]=1;
            }
        }
    });

},1000);
