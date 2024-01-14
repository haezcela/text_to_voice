var micButton = document.getElementById("btn");
var micIcon = document.getElementById("micIcon");

// Set initial state
var isRecording = false;

micButton.addEventListener("click", function () {
  // Toggle recording state
  isRecording = !isRecording;

  // Change button text and icon based on the recording state
  if (isRecording) {
    micButton.innerHTML = "OFF MIC";
    // Change the button icon to the recording GIF (replace 'recording.gif' with your actual file path)
    micIcon.src = "assets/icons/microphone-active.gif"; // Replace with the path to the image when the microphone is on
  } else {
    micButton.innerHTML = "Open Mic";
    // Change the button icon back to the initial state (replace 'initial.gif' with your actual file path)
    micIcon.src = "assets/icons/no-microphone.gif"; // Replace with the path to the initial image
  }
});
