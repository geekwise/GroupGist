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

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
}, false);