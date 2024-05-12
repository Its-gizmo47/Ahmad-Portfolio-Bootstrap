function runTypingEffect() {
  const typeTextElm = document.querySelector("#name")
  const text = "I am Ahmad Javid."
  const typeDelay = 150

  typeText(text, typeTextElm, typeDelay)
}
function typeText(text, typeTextElm, typeDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typeTextElm.textContent += text.charAt(i)
    }, typeDelay * i)
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect)
