

var context = new AudioContext();
var oscillatorNode = context.createOscillator();
var gainNode = context.createGain();
   

document.body.addEventListener('mousemove', function(e){

    	if (mousedown) {
            calculateFrequencyAndGain(e);

        }

    console.log(e.clientX);
    console.log(e.clientY);

    console.log(window.innerWidth);
    console.log(window.innerHeight);


});

oscillatorNode.connect(gainNode);
gainNode.connect(context.destination);

gainNode.gain.value = 0.3;
oscillatorNode.frequency.value = 880;

oscillatorNode.start(context.currentTime);
oscillatorNode.stop(context.currentTime + 1);


document.body.addEventListener('mousedown', function(e){
    mousedown =true;

    oscillator = context.createOscillator();
    oscillator.connect(gainNode);
    gainNode.connect(connect.destination);

    calculateFrequencyAndGain(e);

    oscillator.start(context.currentTime);
});


document.body.addEventListener('mouseup', function(e){
    mousedown =false;
    if (oscillator) {
        oscillator.stop(context.currentTime);
        oscillator.disconnect();

    }


});

function calculateFrequencyAndGain(e) {
    var maxFrequency = 2000,
        minFrequency = 20,
        maxGain = 1,
        minGain = 0;

       // oscillator.frequency.value = (((e.clientX / window.innerWidth) * maxFrequency) + minFrequency);
        //gainNode.gain.value = (((e.clientY / window.innerHeight) * maxGain) + minGain);

        gainNode.gain.setTargetAtTime = (((e.clientY / window.innerHeight) * maxGain) + minGain);
        oscillator.frequency.setTargetAtTime((((e.clientX / window.innerWidth) * maxFrequency) + minFrequency);, context.currentTime, 0.01);
}