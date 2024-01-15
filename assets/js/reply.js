// Initialize Artyom
const artyom = new Artyom();

// Get DOM elements for mic button and mic icon
var micButton = document.getElementById("btn");
var micIcon = document.getElementById("micIcon");

// Set initial state for recording
var isRecording = false;

// Event listener for mic button click
micButton.addEventListener("click", function () {
  // Toggle recording state
  isRecording = !isRecording;

  // Change button text and icon based on the recording state
  if (isRecording) {
    micButton.innerHTML = "OFF MIC";
    micIcon.src = "assets/icons/microphone-active.gif"; // Replace with the path to the image when the microphone is on

    // Initialize Artyom for speech recognition
    artyom.say("Please speak");
    artyom
      .initialize({
        lang: "en-GB",
        continuous: true,
        soundex: true,
        debug: true,
        executionKeyword: "and do it now",
        listen: true,
      })
      .then(() => {
        console.log("Artyom has been successfully initialized");
        $("console").append("Please speak to execute command");
      })
      .catch((err) => {
        console.log("Artyom couldn't be initialized", err);
        $("console").append("Artyom couldn't be initialized", err);
      });
  } else {
    micButton.innerHTML = "Open Mic";
    micIcon.src = "assets/icons/no-microphone.gif"; // Replace with the path to the initial image

    // Turn off microphone and Artyom
    artyom.say("microphone off");
    artyom.fatality();
  }
});

// Add custom voice commands
artyom.addCommands([
  {
    indexes: ["Hello", "hi", "hey"],
    action: (i) => {
      artyom.say("Hello user!, What can I do for you?");
    },
  },
  {
    indexes: ["Can you understand what I'm saying"],
    action: (i) => {
      artyom.say("Of course, because the programmer taught me how to.");
    },
  },
  {
    indexes: ["Shutdown"],
    action: (i, wildcard) => {
      // Stop Artyom when the shutdown command is recognized
      artyom.fatality().then(() => {
        console.log("Artyom successfully stopped");
      });
    },
  },
]);

// Handle the case when no command is matched
artyom.when("NOT_COMMAND_MATCHED", function () {
  artyom.say("I'm sorry, I don't have an answer for that.");
});
