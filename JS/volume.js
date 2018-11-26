//var volumeslider;
	
	filter = audioContext.createBiquadFilter();
	source.connect(filter);
	filter.connect(audioContext.destination);
	
	var distortion = audioContext.createWaveShaper();
	source.connect(distortion);
	distortion.connect(audioContext.destination);

	distortion.curve = makeDistortionCurve(0);
	distortion.oversample = "4x";

	function sliderchange () {
		
		switch(this.id) {
			case "volumeslider":
			var volumeslider = document.getElementById("volumeslider");
			volumeslider.addEventListener("mousemove", setvolume);
			document.getElementById("volumeOutput").innerHTML = this.value + " Volume";
			break;
			case "gainslider":
			filter.gain.value = this.value;
			document.getElementById("gainOutput").innerHTML = this.value + " dB";
			break;
			case "qualityslider":
			filter.Q.value = this.value;
			 document.getElementById("qualityOutput").innerHTML = this.value;
			break;
			case "distortionslider":
			document.getElementById("distortionOutput").innerHTML = this.value;
			break;
			
		}
	}
	
		//volumeslider = document.getElementById("volumeslider");		//reagiert plötzlich nicht ?
		//volumeslider.addEventListener("mousemove", setvolume);
		

	

function makeDistortionCurve(amount) {    
    var n_samples = 44100,
        curve = new Float32Array(n_samples);
    
    for (var i = 0; i < n_samples; ++i ) {
        var x = i * 2 / n_samples - 1;
        curve[i] = (Math.PI + amount) * x / (Math.PI + (amount * Math.abs(x)));
    }
    
    return curve;
};

	
		
		
		function setvolume(){
			audioElement2.volume = volumeslider.value / 100;
		}

