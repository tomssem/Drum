const soundMap = {
    "w": "crash",
    "a": "kick-bass",
    "s": "snare",
    "d": "tom-1",
    "j": "tom-2",
    "k": "tom-3",
    "l": "tom-4"
};

function handleClick() {
    const buttonLetter = this.innerText;
    let audio = new Audio(`sounds/${soundMap[buttonLetter]}.mp3`);
    audio.play();
}

Array.from(
    document.getElementsByTagName("button")).forEach(
    b => b.addEventListener("click", handleClick))