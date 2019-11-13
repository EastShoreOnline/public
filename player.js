//basic player functionality so teachers can embed multiple videos from the same html

//the hash stores all the custom data for this video
var hash = location.hash.replace('#','').split('~');

//default values for custom data that can be hashed
var video_mode = 'regular';
var video_size = '854x480';
var video_triggers='';
var video_variables='';
var video_url='';

var temp;

for(var a=0; a<hash.length; a++){
    temp=hash[a].split(':');
    //web address of stored video
    if(temp[0]=='url'){
        video_url=temp[1];
    }
    //dimensions of stored video
    if(temp[0]=='size'){
        video_size=temp[1];
    }
    //level of security for player
    if(temp[0]=='mode'){
        video_mode=temp[1];
    }
    //time in seconds for when triggers should activate
    if(temp[0]=='triggers'){
        video_triggers=temp[1];
    }
    //name of variables that triggers will change
    if(temp[1]=='variables'){
        video_variables=temp[1];
    }
}

//split dimensions into width and height
video_size = video_size.split('x');

//load the video into the html
var my_video = document.getElementById('my_video');
var my_source = document.getElementById('my_source');
my_video.setAttribute('width',video_size[0]);
my_video.setAttribute('height',video_size[1]);
my_source.source.setAttribute('src',video_url);
my_video.load();
