const keys = document.querySelectorAll(".key");

function getKeyCode(event) {
  const isKeyboard = event.type === "keydown";

  if (isKeyboard) {
    return event.keyCode;
  }
  return event.target.dataset.key;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

  audio.currentTime = 0;
  audio.play();
}

function addPlayingClass(key) {
  key.classList.add("playing");
}

function removePlayingClass(event){
  event.target.classList.remove("playing")
}

function playNote(event) {
  let audioKeyCode = getKeyCode(event);
  console.log(audioKeyCode)

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  const cantFoundAnyKey = !key;

  if (cantFoundAnyKey) {
    return;
  }
  addPlayingClass(key);
  playAudio(audioKeyCode);
}

keys.forEach((key) => {
  key.addEventListener("click", playNote);
  key.addEventListener("transitionend", removePlayingClass);
});

window.addEventListener("keydown", playNote);




