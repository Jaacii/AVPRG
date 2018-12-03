 //------------Play Button
		var onOff = 0;
		
			function playOrPauseSong() {
				
				
				
				if (onOff === 0) {
					audioElement2.src = songs[select];
				
					audioElement2.play();
					//audioElement2.volume = volumeslider.value / 100;
					//Pic change
					//document.getElementById("playpic").src="pause.png";
					onOff = 1;
				}
				else {
					
					audioElement2.pause(); 
					//audioElement2.volume = 0;		//schummeltaktik, weil es manchmal die audio nicht pausiert
					//Pic change
					//document.getElementById("playpic").src="play.png";
					onOff = 0;
				}
			}

			
			
			
			