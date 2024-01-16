// main.js

const artyom = new Artyom();

import * as artyomModule from "./artyom.js";
import * as micModule from "./mic.js";

const micButton = document.getElementById("btn");
const micIcon = document.getElementById("micIcon");

micModule.toggleMic(micButton, micIcon);
