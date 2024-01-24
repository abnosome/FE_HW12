//Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!". С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".

const elem = document.querySelector("p");
elem.innerText = "Привет, JavaScript!";

//Создайте массив из строк. Напишите функцию, которая получает этот массив и создает нумерованный список из этих строк в html документе.

const arrayMountains = ["Арарат", "Арагац", "Аждаак", "Капутджук", "Ачкасар"];

function createNumberedList(mountains) {
    const listContainer = document.createElement("ol");

    mountains.forEach((list) => {
        const listMountain = document.createElement("li");
        listMountain.textContent = list;
        listContainer.append(listMountain); 
    });

    document.body.append(listContainer);
}

createNumberedList(arrayMountains);

//Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

const array = [
    {
      lable: "Suomi",
      link: "http://www.example1.com"
    },
    {
      lable: "Norja",
      link: "http://www.example2.com"
    },
    {
      lable: "Sverige",
      link: "http://www.example3.com"
    }
];



//Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

const arrayLink = [
    {
      lable: "Suomi",
      link: "http://www.example1.com"
    },
    {
      lable: "Norja",
      link: "http://www.example2.com"
    },
    {
      lable: "Sverige",
      link: "http://www.example3.com"
    }
];

function createLinks(linksArray) {
    const container = document.createElement("div");

    linksArray.forEach(({ label, link }) => {
        const linkElem = document.createElement("a");
        linkElem.textContent = label;
        linkElem.href = link;
        
        const lineBreak = document.createElement("br"); 
        container.append(linkElem, lineBreak);
    });

    document.body.append(container);
}

createLinks(arrayLink);