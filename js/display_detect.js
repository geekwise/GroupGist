/**
 * Created by Eric on 11/10/2015.
 */
//
//var max_tilt_gam = body.clientWidth
//var max_tilt_beta = body.clientHeight
//
//if (window.matchMedia())
//
//function handle_orentation(event){
//
//    var tilt_left = event.alpha;
//    var tilt_right = event.beta;
//    if (tilt_left <= 90){
//        tilt_left = 90;
//        alert('landscape left);
//    }else if (tilt_right >= -90){
//        tilt_right = -90;
//        alert('landscape right');
//    }
//}
//body.addEventListener('deviceorientation', handle_orentation);

var supports_orientation_change = "onorientationchange" in window,
    orientation_event = supports_orientation_change ? "orientationchange" : "resize";

window.addEventListener(orientation_event, function() {
    console.log( window.orientation + " " + screen.width);
    body.(matchMedia('(max-width: 600px)').matches);
}, false);