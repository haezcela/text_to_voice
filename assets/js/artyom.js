const artyom = new Artyom();

export const initializeArtyom = () => {
  console.log("Initializing Artyom...");
  artyom.say("Please speak");
  return artyom.initialize({
    lang: "en-GB",
    continuous: true,
    soundex: true,
    debug: true,
    executionKeyword: "and do it now",
    listen: true,
  });
};

export const stopArtyom = () => {
  artyom.say("microphone off");
  return artyom.fatality().then(() => {
    console.log("Artyom successfully stopped");
  });
};
