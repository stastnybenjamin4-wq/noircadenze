const typewriterElement = document.querySelector("em");
const typewriterList = ["creativity", "bananas","improvisation", "brownies"];
let typewriterListTracker = 0;

//Increase the typewriterListTracker by 1
function nextElement() {
    typewriterElement.style.opacity = 0;    
        setTimeout(function() {
            
            typewriterListTracker += 1;
            if (typewriterListTracker >= typewriterList.length) {
                typewriterListTracker = 0;
            }
            typewriterElement.textContent = typewriterList[typewriterListTracker];
            typewriterElement.style.opacity = 1;
        }, 700);
}
setInterval(nextElement, 3000);
