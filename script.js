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

// stampo su console le singole info di ogni membro

for (let i=0; i < members.length; i++) {

    const nowMember = members[i];
    table.innerHTML += `<li>${i}</li>`

    for (let key in nowMember) {
        let infoIs = (nowMember[key]);
        table.innerHTML += `${infoIs} ; `
    }
}
