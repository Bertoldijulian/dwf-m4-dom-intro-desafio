const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {};

 const ul = document.querySelector(".lista");
 ul.innerHTML = " ";

 const newList = document.querySelector('.lista');

 cosasQueAprendimos.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.tema;
  li.className = item.class;

  newList.appendChild(li);
 })

main();
