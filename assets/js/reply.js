const artyom = new Artyom();

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
        console.log("Artyom coudn't be initialized", err);
        $("console").append("Artyom coudn't be initialized", err);
      });
  } else {
    micButton.innerHTML = "Open Mic";
    // Change the button icon back to the initial state (replace 'initial.gif' with your actual file path)
    micIcon.src = "assets/icons/no-microphone.gif"; // Replace with the path to the initial image
    artyom.say("microphone off");
    artyom.fatality();
  }
});

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
      artyom.say("Ofcourse, because the programmer taught me how to.");
    },
  },
  {
    indexes: ["Shutdown"],
    action: (i, wildcard) => {
      artyom.fatality().then(() => {
        console.log("Artyom successfully stopped");
      });
    },
  },
]);

artyom.when("NOT_COMMAND_MATCHED", function () {
  // Handle the case when no command is matched
  artyom.say("I'm sorry, I don't have an answer for that.");
});
