/*Prompt: Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
and if you enter RGB color format it returns HEX.*/

//Prompt for user input
const input = prompt("Enter HEX or RGB value. \nHEX values must be exactly 6 digits long. \nRGB values must be in the format rgb(#,#,#)");


/* hexRGBConverter function
* @param input A String representing either a 6-digit hex or RGB value 
* @return the converted hex or RGB value
*/
const hexRGBConverter = (input) => {

	//Check that input format is valid
	if(input.length !== 6 && !input.includes('('))
		alert("Invalid format. Please refresh and try again");
	
	else{
		//If given a HEX number, convert to RGB
		if(input.length === 6){

			//Split hex into array of pairs of digits
			const hexArray = input.match(/.{1,2}/g);

			//Parse each hex pair into an int in a new array
			const rgbArray = [
				parseInt(hexArray[0], 16),
				parseInt(hexArray[1], 16),
				parseInt(hexArray[2], 16)
			];

			//Return RGB value as a string
			return '(' + rgbArray[0] + ',' + rgbArray[1] + ',' + rgbArray[2] + ')';
		}

		//If given RBG number, convert to HEX
		else{
			//Split rgb values into array
			const separatedRGB = input.substring(input.indexOf('(') +1, input.length -1).split(',');
			
			//Convert each color value from decimal to hex and map to new array 
			const hexArray = separatedRGB.map((num) =>{
				let hexadecimal = parseInt(num).toString(16);
				return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
			});

			//return hex value as a string
			return "#" + hexArray[0] + hexArray[1] + hexArray[2];
		}
	}
}

hexRGBConverter(input);