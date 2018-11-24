			//MoveButtons     funktioniert scheinbar noch nicht
		 var Ycounter =1;
		  var Xcounter =1;
		  var Zcounter =1;
		 function move(direction) {
		
			if (direction === 0) {
				 y = y + 5 * Ycounter; 
				audioElement2.setY(y);
				Ycounter = Ycounter+1;
			}
			else if (direction === 4) {
				 y = y - 5 * Ycounter; 
				audioElement2.setY(y);
				Ycounter = Ycounter-1;
			}
			else if (direction === 1) {
				 x = x - 5 * Xcounter; 
				audioElement2.setY(y);
				Xcounter = Xcounter-1;
			}
			else if (direction === 3) {
				 x = x + 5 * Ycounter; 
				audioElement2.setY(y);
				Ycounter = Ycounter-1;
			}
			else if direction === 2) {
			Ycounter =1;
			Xcounter =1;
			Zcounter =1; 
			audioElement2.setPosition(0,0,0);
			audioElement2.play();
			}
			
		 
		 } 
		 