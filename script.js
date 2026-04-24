const typewriterElement = document.querySelector("em");
const typewriterList = ["creativity", "improvisation", "Bananas", "Brownies"];
let typewriterListTracker = 0;

//Increase the typewriterListTracker by 1
function nextElement() {
    typewriterElement.textContent = typewriterList[typewriterListTracker];
    typewriterListTracker += 1;
    if (typewriterListTracker >= typewriterList.length) {
        typewriterListTracker = 0;
    }
}
setInterval(nextElement, 2000);