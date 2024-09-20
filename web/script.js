function getDec(amount, decPlaces) {
  const integer = String(Math.floor(amount));
  var decimal = "";
  for (let i=0; i<decPlaces; i++) {
    amount %= 1;
    amount *= 10;
    decimal += String(Math.floor(amount));
  }
  return {"int": integer, "dec": decimal};
}

function main() {
  const textSizeInput = document.getElementById("textSizeInput");
  const textAreaDemo = document.getElementById("textAreaDemo");
  const timer = document.getElementById("timer");
  const start = Date.now();
  
  function animFrame() {
    const disp = getDec((Date.now() - start) / 1000, 3);
    timer.innerText = disp.int + "." + disp.dec + "s";
    
    requestAnimationFrame(animFrame);
  }
  
  textSizeInput.addEventListener("change", () => {
    textAreaDemo.style.fontSize = String(textSizeInput.value) + "px";
  });
  
  requestAnimationFrame(animFrame);
}

document.addEventListener("DOMContentLoaded", main);