const container = document.querySelector(".container");
let pixels = 16;
const btn = document.querySelector(".btn");
btn.style.backgroundColor = "blue";
btn.style.padding = "8px 16px";
btn.style.display = "inline-block";
btn.style.color = "white";
btn.style.borderRadius = "8px";
btn.style.margin = "8px 16px"
btn.textContent = "How many pixels? "
btn.addEventListener("click", () => {
  do {
    pixels = prompt("Please enter Pixels: ");
  } while (pixels > 100);
})
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = `${pixels * 20}px`;
container.style.height = `${pixels * 20}px`;
const div = document.createElement("div");

for (let j = 1; j <= pixels; j++) {
  for (let i = 1; i <= pixels; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("id", "cell");
    // div.textContent = `${i}`;
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "#f9fafb"
  }
}
container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "#881337";
  console.log("hovered");
})
