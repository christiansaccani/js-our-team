// variabili

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg',
    }
];

const table = document.querySelector("#table");
const containerEl = document.querySelector(".container");


// stampo in pagina le singole info di ogni membro

for (let i=0; i < members.length; i++) {

    const nowMember = members[i];
    const newElement = document.createElement("li");
    table.append(newElement);

    for (let key in nowMember) {
        newElement.innerHTML += `${(nowMember[key])} | `
    }

}

// -------------------------------------------------------------  //

for (let i=0; i < members.length; i++) {
    
    const newElement = document.createElement("div");
    newElement.className = "card p-1";
    newElement.style.width = "18rem";
    containerEl.append(newElement);

    let newPicElement = document.createElement('img');
    newPicElement.className = "card-img-top";
    newPicElement.src = "img/" + members[i].pic;
    newElement.append(newPicElement);

    let newNameElement = document.createElement('h5');
    newNameElement.className = "card-title text-center";
    newNameElement.innerText = members[i].name;
    newElement.append(newNameElement);

    let newRoleElement = document.createElement('p');
    newRoleElement.className = "card-text text-center";
    newRoleElement.innerText = members[i].role;
    newElement.append(newRoleElement);

}