const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

yes.addEventListener("click", () => {
  result.innerHTML = "YAY!! 💖💖 See you on Valentine’s Day 😍🌹";
});

no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  no.style.transform = `translate(${x}px, ${y}px)`;
});
