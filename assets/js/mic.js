// mic.js
import { initializeArtyom, stopArtyom } from "./artyom.js";
import * as commandsModule from "./commands.js";

const artyom = new Artyom();

export const toggleMic = (micButton, micIcon) => {
  var isRecording = false;

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
};

artyom.addCommands(commandsModule.customCommands);
