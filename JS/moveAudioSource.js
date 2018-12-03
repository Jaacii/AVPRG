 	//MoveButtons     funktioniert scheinbar noch nicht
		 
		 function moveSource(direction) {
		 
		 if (direction === 0) {
			
			y = y+1;
			
			document.getElementById("Ycoordinate").textContent= y;
			
			}
		else if (direction === 1) {
			x = x-1;
			
			document.getElementById("Xcoordinate").textContent=  x;
			
			}
		else if (direction === 2) {
			x = 0;
			y = 0;
			
			document.getElementById("Xcoordinate").textContent= x;
			document.getElementById("Ycoordinate").textContent=  y;
			
			}
		else if (direction === 3) {
			x = x+1;
			
			document.getElementById("Xcoordinate").textContent= x;
			
			}
		else if (direction === 4) {
			
			y = y-1;
			document.getElementById("Ycoordinate").textContent= y;
			
			
			}
			
			//audioElement2.setPosition(x,y,z);						doesn´t work
			//audioElement2.play();
			
			
		 
		 } 