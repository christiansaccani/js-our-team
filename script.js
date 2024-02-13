// variabili

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: './img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        pic: './img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        pic: './img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        pic: './img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: './img/barbara-ramos-graphic-designer.jpg',
    }
];

const table = document.querySelector("#table");
const containerEl = document.querySelector(".container");


// stampo su console le singole info di ogni membro

for (let i=0; i < members.length; i++) {

    const nowMember = members[i];
    table.innerHTML += `<li>Member ${i + 1}:</li>`

    for (let key in nowMember) {
        let infoIs = (nowMember[key]);
        table.innerHTML += `${infoIs} ; `

    }
}

// -------------------------------------------------------------  //

for (let i=0; i < members.length; i++) {
    
    const newElement = document.createElement("div");
    newElement.className = "card";
    newElement.style.width = "18rem";
    containerEl.append(newElement);

    let memberPic = members[i].pic;
    let newPicElement = document.createElement('img');
    newPicElement.className = "card-img-top";
    newPicElement.src = memberPic;
    newElement.append(newPicElement);

    let memberName = members[i].name;
    let newNameElement = document.createElement('h5');
    newNameElement.className = "card-title";
    newNameElement.innerText = memberName;
    newElement.append(newNameElement);

    let memberRole = members[i].role;
    let newRoleElement = document.createElement('p');
    newRoleElement.className = "card-text";
    newRoleElement.innerText = memberRole;
    newElement.append(newRoleElement);

}