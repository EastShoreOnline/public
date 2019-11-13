//array to hold multiple trigger times
var trigger_times=[];
var trigger_vars=[];
window.setTimeout(function(){
    if(video_triggers!=''){
        if(video_triggers.indexOf(',')==-1){
            trigger_times=[video_triggers];   
        }
        else{
           trigger_times=video_triggers.split(',');   
        }
        if(video_variables.indexOf(',')==-1){
            trigger_vars=[video_variables];   
        }
        else{
            trigger_vars=video_variables.split(',');   
        }
        if(trigger_times.length!=trigger_vars.length){
         alert("The number of video triggers does not match the number of variables.")   
        }
        var trigger_array = [];
        var this_time;
        var this_var;
        for(var a=0; a<trigger_times.length; a++){
            trigger_array[a]=0;
        }      
        my_video.addEventListener("timeupdate", function(){
            for(a=0; a<trigger_times.length; a++){
                if(this.currentTime >= trigger_times[a]*1 && trigger_array[a]==0) {
                    this.pause();
                    parent.postMessage(trigger_vars[a],'*');
                    trigger_array[a]=trigger_array[a]+1;
                }
            }
        });
    }
},1000);
