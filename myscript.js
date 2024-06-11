(()=>{
    function pause_all() {
        document.querySelectorAll("video").forEach(function(v){
            var p=v.parentNode.parentNode;
            //p.playVideo();
            //p.pauseVideo();
            p.cueVideoById(p.getVideoData().video_id,p.getCurrentTime());
        });
    }

    function go() {
    
        if(!location.pathname.match("(^/watch.*$)|(^/[@uc].*$)")) {
            return;
        }
        
        document.querySelectorAll("video").forEach(function(v){
            var p=v.parentNode.parentNode;
            //p.cueVideoById(p.getVideoData().video_id,p.getCurrentTime());
            //p.loadVideoById(p.getVideoData().video_id,p.getCurrentTime());
            //let playVideo = p.playVideo;
            //p.playVideo = () => {};
            //playVideo();
            //p.stopVideo();
            //
            
            //p.pauseVideo();
            
            p.seekTo(p.getCurrentTime(), true);
            p.pauseVideo();
        });
        
        //pause_all();
        //setTimeout(function(){ pause_all(); }, 100);
    }
    
    document.addEventListener('yt-navigate-start', go);
    document.addEventListener('yt-navigate-finish', go);
    go();
})();