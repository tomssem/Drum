const soundMap = {
    "w": "crash",
    "a": "kick-bass",
    "s": "snare",
    "d": "tom-1",
    "j": "tom-2",
    "k": "tom-3",
    "l": "tom-4"
};
const handleClick = e => {
    const buttonLetter = e.target.className.substr(0, 1);
    let audio = new Audio(`sounds/${soundMap[buttonLetter]}.mp3`);
    audio.play();
}

Array.from(
    document.getElementsByTagName("button")).forEach(
    b => b.addEventListener("click", handleClick))