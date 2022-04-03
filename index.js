var displays = document.getElementById("display");
var buttons = Array.from(document.getElementsByClassName("button"));
var btn = document.addEventListener("click", buttons);
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    var text = e.target.innerText;
    switch (e.target.innerText) {
      case "AC":
        displays.innerText = "";
        break;
      case "C":
        displays.innerText = displays.innerText.slice(0, -1);
        break;
      case "=":
        try {
          displays.innerText = eval(displays.innerText);
        } catch {
          displays.innerText = "error";
        }
        break;
      default:
        displays.innerHTML += text;
        break;
    }
  });
});
