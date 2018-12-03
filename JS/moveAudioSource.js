 	//MoveButtons     funktioniert scheinbar noch nicht
		 
		 var xDisplay =0, 
			 yDisplay =0;			//die Floatzahl verursachte Anzeigefehler. Daher gibt es eine extra Variable
		 function moveSource(direction) {
		 
		 
		 if (direction === 0) {
			
			y = y+0.1;
			yDisplay = yDisplay+1;
			
			document.getElementById("Ycoordinate").textContent= y ;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 1) {
			x = x+0.1;
			xDisplay = x+1;	//Die X-Achse ist gespiegelt. Darum - statt +
			
			document.getElementById("Xcoordinate").textContent=  ((x*-1)*10)/10 ;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 2) {
			x = 0.0;
			y = 0.0;
			xDisplay = 0; 
			yDisplay =0;
			
			document.getElementById("Xcoordinate").textContent= x;
			document.getElementById("Ycoordinate").textContent=  y;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 3) {
			x = x-0.1;
			xDisplay + xDisplay - 1;
			
			document.getElementById("Xcoordinate").textContent= ((x*-1)*10)/10  ; 
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 4) {
			
			y = y-0.1;
			yDisplay = yDisplay-1;
			document.getElementById("Ycoordinate").textContent= y;
			resonanceAudioScene.setListenerPosition(x, y, z);
			
			}
			
			
			
			
		 
		 } 