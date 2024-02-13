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
const img0El = document.querySelector('.us_img_0');
const name0El = document.querySelector('.us_name_0');
const role0El = document.querySelector('.us_role_0');
const img1El = document.querySelector('.us_img_1');
const name1El = document.querySelector('.us_name_1');
const role1El = document.querySelector('.us_role_1');
const img2El = document.querySelector('.us_img_2');
const name2El = document.querySelector('.us_name_2');
const role2El = document.querySelector('.us_role_2');
const img3El = document.querySelector('.us_img_3');
const name3El = document.querySelector('.us_name_3');
const role3El = document.querySelector('.us_role_3');
const img4El = document.querySelector('.us_img_4');
const name4El = document.querySelector('.us_name_4');
const role4El = document.querySelector('.us_role_4');
const img5El = document.querySelector('.us_img_5');
const name5El = document.querySelector('.us_name_5');
const role5El = document.querySelector('.us_role_5');

// stampo su console le singole info di ogni membro

for (let i=0; i < members.length; i++) {

    const nowMember = members[i];
    table.innerHTML += `<li>Member ${i + 1}:</li>`

    for (let key in nowMember) {
        let infoIs = (nowMember[key]);
        table.innerHTML += `${infoIs} ; `

    }
}

name0El.innerHTML = members[0].name;
role0El.innerHTML = members[0].role;
img0El.src = members[0].pic;

name1El.innerHTML = members[1].name;
role1El.innerHTML = members[1].role;
img1El.src = members[1].pic;

name2El.innerHTML = members[2].name;
role2El.innerHTML = members[2].role;
img2El.src = members[2].pic;

name3El.innerHTML = members[3].name;
role3El.innerHTML = members[3].role;
img3El.src = members[3].pic;

name4El.innerHTML = members[4].name;
role4El.innerHTML = members[4].role;
img4El.src = members[4].pic;

name5El.innerHTML = members[5].name;
role5El.innerHTML = members[5].role;
img5El.src = members[5].pic;