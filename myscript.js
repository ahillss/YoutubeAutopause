(()=>{     
    function pause_all() {
        document.querySelectorAll("video").forEach(function(v){
            var p=v.parentNode.parentNode;
            p.pauseVideo();
        });
    }

    function go() {
        //if(!location.pathname.startsWith('/watch')) {
        //    return;
        //}
        
        pause_all();     
        
        setTimeout(function(){
            pause_all();
        }, 1000);
        
        setTimeout(function(){
            pause_all();
        }, 2000);
    
        /*var c4_player=document.querySelector("#c4-player");
        if(c4_player){
            c4_player.pauseVideo();
            c4_player.stopVideo();
            c4_player.playVideo = () => {};
        }
        if(typeof movie_player !== 'undefined') {
            movie_player.pauseVideo();         
        }*/
    }
    
    //document.addEventListener('yt-navigate-start', go);
    document.addEventListener('yt-navigate-finish', go);
    go();
})();