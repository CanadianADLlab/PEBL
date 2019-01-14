/*
Insert License Information Here
*/

/*
Instructions:
1. Create a div, span or whichever element you need at the appropriate location in the document
2. Assign an id to the element 
3. Link this script in the head of the html file
4. call the createAudioPlayer function with the appropriate arguments from an appropriate location in the html file
*/

/*
Notes:
This script does not depend on PEBLCore.js yet, the HTML5 audio player api is sufficient
That will change if we decide to implement xAPI calls, etc.

We could add a change to the cursor while hovering over this widget to inform the user that it can be interacted with
*/

//let globalPebl = window.parent.PEBL;

/*
//Don't think we need the ready function? Not sure what it is used for in all the other files
$(document).ready(function () {
	$('.audio_audioExtension').each(function) {
		let insertID = $(this)[0].getAttribute('id')
	}
})
*/

//To be totally consistent, this should accept iconType parameter and automatically assign the correct icons based on that.
//other icon types could include more complex players with progress bar and volume controls.
//could write a more complicated script to auto-detect the file type
function createAudioPlayer(insertID, audioFileName, audioFileType) {
	let audioSpan = document.querySelector('#' + insertID);
	audioSpan.classList.add(".audio_audioExtension");

	let audioPlayer = document.createElement("audio");
	audioPlayer.setAttribute("src", "../pebl/media/audio/" + audioFileName);
	audioPlayer.setAttribute("type", audioFileType);
	audioSpan.appendChild(audioPlayer);

	let audioButton = document.createElement("a");
	audioSpan.appendChild(audioButton);

	let audioIcon = document.createElement("img");
	audioIcon.setAttribute("src", "../pebl/media/images/audio-play-circle.svg"); //set to Play icon by default
	audioIcon.setAttribute("alt", "Image was not found.");
	audioButton.appendChild(audioIcon);

	audioButton.addEventListener("click", handleAudioClick);
	audioPlayer.addEventListener("ended", handleAudioEventEnded);
}


function handleAudioClick(event) {
	//the event.target object is the img element that was clicked
	let audioPlayer = event.target.parentElement.parentElement.querySelector('audio'); //get the audio element
	if(audioPlayer.paused) {
		event.target.setAttribute("src", "../pebl/media/images/audio-pause-circle.svg"); //change the Play icon to a Pause icon
		audioPlayer.play();
	} else if(!audioPlayer.paused) {
		event.target.setAttribute("src", "../pebl/media/images/audio-play-circle.svg"); //change the Pause icon to a Play Icon
		audioPlayer.pause();
	}
}

function handleAudioEventEnded(event) {
	let audioIcon = event.target.parentElement.querySelector('a > img');
	if(event.target.paused) {
		audioIcon.setAttribute("src", "../pebl/media/images/audio-play-circle.svg"); //switch the icon to show the play button when the audio clip has ended
	}
}