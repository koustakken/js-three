window.onload = () => {
  // find root directory
  const root = json.filter((item) => item.head === null).sort((a,b) => a.sorthead - b.sorthead);
  console.log(root)
  // inner html
  const list = document.querySelector("#list");
  const items = root.map((listItem) => buildDirectoryList(listItem));
  list.innerHTML = items.join(""); // join for exclude comma
};

// json
const json = [
  {
    id: 1,
    head: null,
    name: "Проф.осмотр",
    node: 0,
    price: 100.0,
    sorthead: 20,
  },
  {
    id: 2,
    head: null,
    name: "Хирургия",
    node: 1,
    price: 0.0,
    sorthead: 10,
  },
  {
    id: 3,
    head: 2,
    name: "Удаление зубов",
    node: 1,
    price: 0.0,
    sorthead: 10,
  },
  {
    id: 4,
    head: 3,
    name: "Удаление зуба",
    node: 0,
    price: 800.0,
    sorthead: 10,
  },
  {
    id: 5,
    head: 3,
    name: "Удаление 8ого зуба",
    node: 0,
    price: 1000.0,
    sorthead: 30,
  },
  {
    id: 6,
    head: 3,
    name: "Удаление осколка зуба",
    node: 0,
    price: 2000.0,
    sorthead: 20,
  },
  {
    id: 7,
    head: 2,
    name: "Хирургические вмешательство",
    node: 0,
    price: 200.0,
    sorthead: 10,
  },
  {
    id: 8,
    head: 2,
    name: "Имплантация зубов",
    node: 1,
    price: 0.0,
    sorthead: 20,
  },
  {
    id: 9,
    head: 8,
    name: "Коронка",
    node: 0,
    price: 3000.0,
    sorthead: 10,
  },
  {
    id: 10,
    head: 8,
    name: "Слепок челюсти",
    node: 0,
    price: 500.0,
    sorthead: 20,
  },
];

// find childrens
function findChildren(node) {
  return json.filter((child) => child.head === node).sort((a,b) => a.sorthead - b.sorthead);
}
// render
function buildDirectoryList(service) {
  let html = `<li>${service.name} (${service.price})`;
  let children = findChildren(service.id);
  if (children.length > 0) {
    html += "<ul>";
    for (let child of children) {
      html += buildDirectoryList(child);
    }
    html += "</ul>";
  }
  html += "</li>";
  return html;
}
