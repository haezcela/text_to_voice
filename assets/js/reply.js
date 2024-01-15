// reply.js
import { toggleMicrophoneState, setArtyomInstance } from "./ui.js";

const artyom = new Artyom();
let isMicOn = false;
let listeningTimeout;

// Set the Artyom instance in ui.js
setArtyomInstance(artyom);

document.getElementById("btn").addEventListener("click", function () {
  toggleMicrophoneState();
});

artyom.addCommands([
  {
    indexes: ["Hello", "hi", "hey"],
    action: (i) => {
      artyom.say("Hello user! What can I do for you?");
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
      stopListening();
      artyom.fatality().then(() => {
        console.log("Artyom successfully stopped");
      });
    },
  },
]);

artyom
  .initialize({
    lang: "en-GB",
    continuous: true,
    soundex: true,
    debug: true,
    executionKeyword: "and do it now",
    listen: false, // Initialize with listening set to false
  })
  .then(() => {
    console.log("Artyom has been successfully initialized");
    $("#console").append("Please speak to execute a command");
  })
  .catch((err) => {
    console.log("Artyom couldn't be initialized", err);
    $("#console").append("Artyom couldn't be initialized", err);
  });

// Other functions remain unchanged
