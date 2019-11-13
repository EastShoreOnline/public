//engages restricted mode which prevents users from searching through portions of the video that have not been viewed yet

if(video_mode=='restricted'){

    var timeTracking = { watchedTime: 0,
                         currentTime: 0
                       };
    var lastUpdated = 'currentTime';

    var searched_video = document.getElementById('my_video');

    searched_video.addEventListener('timeupdate', function () {
        if (!searched_video.seeking) {
            if (searched_video.currentTime > timeTracking.watchedTime) {
                timeTracking.watchedTime = searched_video.currentTime;
                lastUpdated = 'watchedTime';
            }
            //tracking time updated  after user rewinds
            else {
                timeTracking.currentTime = searched_video.currentTime;
                lastUpdated = 'currentTime';
            }
        }
    });
    // prevent user from seeking
    searched_video.addEventListener('seeking', function () {
        // guard against infinite recursion:
        // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
        var delta = searched_video.currentTime - timeTracking.watchedTime;
        if (delta > 0) {
            searched_video.pause();
            alert("You cannot navigate to a portion of the video you have not yet viewed.");
            //play back from where the user started seeking after rewind or without rewind
            searched_video.currentTime = timeTracking[lastUpdated];
            searched_video.play();
        }
    });
}