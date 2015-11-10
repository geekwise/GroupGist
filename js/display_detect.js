/**
 * Created by Eric on 11/10/2015.
 */

function handle_orentation(event){
    var tilt_left = event.gamma;
    var tilt_rigt = event.gamma;
    if (tilt_left >= 90){
        console.log('landscape left);
    }else if (tilt_right >= -90){
        console.log('landscape right');
    }
}
window.addEventListener('deviceorientation', handle_orentation());