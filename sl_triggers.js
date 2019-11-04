window.setTimeout(function(){
    console.log(document.getElementById("triggers"));
    var trigger_element = document.getElementById("triggers")
    var trigger_times = trigger_element.getAttribute("data-times")
    var trigger_vars = trigger_element.getAttribute("data-vars")
    console.log(trigger_times,trigger_vars)
},1000);
