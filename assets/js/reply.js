const artyom = new Artyom();
document.getElementById("btn").addEventListener(
  "click",
  function () {
    artyom.say("Please speak");
  },
  false
);

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
