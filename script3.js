let tabs=[
    {
        header: 'Один',
        body: 'Первая вкладка',
        info: 'Далеко-далеко за словесными горами в стране, гласных и согласных живут рабные тексты.'
    },
    {
        header: 'Два',
        body: 'Вторая вкладка',
        info: 'Интересный текст'
    },
    {
        header: 'Три',
        body: 'Третья вкладка',
        info: 'не интересный текст'
    }
];

let headerItems = document.querySelectorAll('.tab-header__item');
let bodyItems = document.querySelectorAll('.tab-body__item');

let titles = document.querySelectorAll('.title');
let paragraps = document.querySelectorAll('p');

for(let i = 0; i < headerItems.length; i++){
    headerItems[i].children[0].innerHTML = tabs[i].header;
    headerItems[i].addEventListener('click', doActiveTab);

    titles[i].innerHTML = tabs[i].body;
    paragraps[i].innerHTML = tabs[i].info;
    // currentHeader.classList.add('active');
}


function doActiveTab(e){
    clearTab();
    // console.log(e.target); //возвращает элемент на который произведен был щелчок, он может отличаться(он внутри события и поднимается наверх)
    // console.log(e.currentTarget); //элемент для которого мы прописали это событие
    // console.log(e.target.closest('div.tab-header__item')); //ищу родителя для текущего элемента

    let currentHeader = e.target.closest('div');
    currentHeader.classList.add('active');

    let currentBody = document.querySelector(currentHeader.dataset.target);
    currentBody.classList.add('active');
}

function clearTab(){
    headerItems.forEach(item => {
        item.classList.remove('active');
    });

    bodyItems.forEach(item => {
        item.classList.remove('active');
    });
}

// let tabs=[
//     {
//         header: 'Один',
//         body: 'Первая вкладка',
//         target: 'tab-1'
//     },
//     {
//         header: 'Два',
//         body: 'Вторая вкладка',
//         target: 'tab-2'
//     },
//     {
//         header: 'Три',
//         body: 'Первая вкладка',
//         target: 'tab-3'
//     }
// ];


// // const headerItems = document.querySelectorAll('.tab-header__item');
// // const bodyItems = document.querySelectorAll('.tab-body__item');

// // headerItems.forEach(header=>{
// //     header.addEventListener('click', (e)=>{
// //         clearTab();
// //         header.classList.add('active');
        
// //         document.querySelector(header.dataset.closest('span.tab-header__item')).classList.add('active');
// //     });
// // });

// // function clearTab(){
// //     headerItems.forEach(item => {
// //         item.classList.remove('active');
// //     });

// //     bodyItems.forEach(item => {
// //         item.classList.remove('active');
// //     });
// // }

// // let tabs=[
// //     {
// //         header: 'Один',
// //         body: 'Первая вкладка',
// //         target: 'tab-1'
// //     },
// //     {
// //         header: 'Два',
// //         body: 'Вторая вкладка',
// //         target: 'tab-2'
// //     },
// //     {
// //         header: 'Три',
// //         body: 'Первая вкладка',
// //         target: 'tab-3'
// //     }
// // ];

// const tabsHeader = document.querySelectorAll('.tab-header__info');
// const tabsBody = document.querySelectorAll('.tab-body__item');


// for(let i = 0; i < tabsHeader.length; i++){
//     tabsHeader[i].innerHTML = tabs[i].header;
//     tabsHeader[i].id = tabs[i].target;

//     tabsBody[i].innerHTML = tabs[i].body;
//     tabsBody[i].id = tabs[i].target;

//     tabsHeader[i].addEventListener('click', doActiveTab);
// }

// // tabsHeader.forEach(tab => {
// //     // let divHeader = document.createElement('div');
// //     // divHeader.classList.add('tab-header__item');
// //     // divHeader.dataset.target = tab.target;
// //     tab.innerHTML = tabs.header;

// //     // divHeader.innerHTML = `<span>${tab.header}</span>`;
// //     // divHeader.addEventListener('click', doActiveTab);

// //     // let divBody = document.createElement('div');
// //     // divBody.classList.add('tab-body__item');
// //     // divBody.innerHTML = `<span>${tab.body}</span>`;
// //     // divBody.id = tab.target;

// //     // tabHeader.append(divHeader);
// //     // tabBody.append(divBody);
// // });

// function doActiveTab(e){
//     clearTab();
//     // console.log(e.target); //возвращает элемент на который произведен был щелчок, он может отличаться(он внутри события и поднимается наверх)
//     // console.log(e.currentTarget); //элемент для которого мы прописали это событие
//     // console.log(e.target.closest('div.tab-header__item')); //ищу родителя для текущего элемента

//     let currentHeader = e.target.closest('div.tab-header__item');
//     currentHeader.classList.add('active');

//     let currentBody = document.querySelector(currentHeader.dataset.target);
//     currentBody.classList.add('active');
// }

// function clearTab(){
//     tabsHeader.forEach(item => {
//         item.classList.remove('active');
//     });

//     tabsBody.forEach(item => {
//         item.classList.remove('active');
//     });
// }