var text = document.getElementById("percentage");

var circle = new ProgressBar.Circle('#example-percent-container', {
    color: '#2bde73',
    strokeWidth: 3,
    trailWidth: 1,
    duration:0,
    from: {color: "#2bde73"},
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
var start = new Date(2021,1,4);
var payday = new Date(2021,3,15);
var msperday = 1000*60*60*24;
var endnb = (payday.getTime() - start.getTime()) / msperday;


function animate(){

    var today = new Date();
    
    var daynb = (today.getTime() - start.getTime()) / msperday;

    
    var final = (daynb / endnb) * 100;
    circle.animate(final.toFixed(6) / 100);
    circle.setText(final.toFixed(6).toString() + "%")

    //requestAnimationFrame(animate);
}
setInterval(animate, 70);