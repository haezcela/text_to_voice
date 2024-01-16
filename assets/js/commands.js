import { initializeArtyom, stopArtyom } from "./artyom.js";
console.log("Commands module loaded.");

export const customCommands = [
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
      return stopArtyom();
    },
  },
];
