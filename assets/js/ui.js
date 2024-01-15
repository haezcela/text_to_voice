// ui.js
export let isRecording = false;
let listeningTimeout;
let artyomInstance; // Declare a variable to hold the Artyom instance

export function setArtyomInstance(artyom) {
  artyomInstance = artyom;
}

export function toggleMicrophoneState() {
  isRecording = !isRecording;
  updateMicrophoneUI();
}

export function updateMicrophoneUI() {
  const micButton = document.getElementById("btn");
  const micIcon = document.getElementById("micIcon");

  if (isRecording) {
    micButton.innerHTML = "OFF MIC";
    micIcon.src = "assets/icons/microphone-active.gif";
    startListening();
  } else {
    micButton.innerHTML = "Open Mic";
    micIcon.src = "assets/icons/no-microphone.gif";
    stopListening();
  }
}

export function startListening() {
  if (!artyomInstance) {
    console.error(
      "Artyom instance is not set. Call setArtyomInstance(artyom) first."
    );
    return;
  }

  isRecording = true;
  clearTimeout(listeningTimeout);

  artyomInstance.say("Please speak");
  artyomInstance
    .listen()
    .then(({ text, isFinal }) => {
      if (isFinal && isRecording) {
        handleUserInput(text);
      }
    })
    .catch((error) => {
      console.error("Artyom listen error:", error);
    });

  listeningTimeout = setTimeout(() => {
    stopListening();
  }, 5000);
}

export function stopListening() {
  isRecording = false;
  clearTimeout(listeningTimeout);
  artyomInstance.fatality();
  console.log("Artyom stopped listening");
}

// Other functions remain unchanged
