const handleClick = _ => {
    alert("I got clicked");
}

Array.from(
    document.getElementsByTagName("button")).forEach(
    b => b.addEventListener("click", handleClick))