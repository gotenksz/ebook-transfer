const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;
let multiVal;
window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  multiVal = document.querySelector("#number");
});

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

async function multi() {
  invoke("multiply", {i: parseInt(multiVal.value)}).then((response) => console.log(response))
  //console.log("yjoo")
}
window.greet = greet;
window.multi = multi;