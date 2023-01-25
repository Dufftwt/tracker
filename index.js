var text = document.getElementById("percentage");

var circle = new ProgressBar.Circle('#example-percent-container', {
    color: '#2bde73',
    strokeWidth: 3,
    trailWidth: 1,
    duration:0,
    from: {color: "#00FF00"},
    to: {color: "#FF0000"},
    text: {
        value: '0'
    },
    step: function(state, bar, attachment) {
        bar.path.setAttribute('stroke', state.color);
    },
    style: {
        
    }
});
var start = new Date(2023,0,24);
var payday = new Date(2023,0,27,10,42);
var msperday = 1000*60*60*24;
let mspermin = 1000*60;
let msperhour = 1000*60*60;
let mspersecond = 1000;
var endnb = (payday.getTime() - start.getTime()) / msperday;


function animate(){

    var today = new Date();
    
    let distance = (payday.getTime() - today.getTime());
    var daynb = Math.floor(distance / msperday);
    let hournb = Math.floor((distance % msperday) / msperhour);
    let minnb = Math.floor((distance % msperhour) / mspermin);
    let secondnb = Math.floor((distance % mspermin) / mspersecond);
    
    let daysPassed = (today.getTime() - start.getTime()) / msperday;
    var final = (daysPassed / endnb) * 100;
    circle.animate(final.toFixed(6) / 100);
    circle.setText(daynb.toFixed() + ":" + hournb.toFixed() + ":" + minnb.toFixed() + ":" + secondnb.toFixed());

    //requestAnimationFrame(animate);
}
setInterval(animate, 70);
