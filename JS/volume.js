var volumeslider;
	
	
		volumeslider = document.getElementById("volumeslider");		//reagiert plötzlich nicht ?
		volumeslider.addEventListener("mousemove", setvolume);
		

			
		
		
		function setvolume(){
			audioElement2.volume = volumeslider.value / 100;
		}

