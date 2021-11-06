//динамический вариант
tabs = [
    {
        target: 'id-1',
        bodyId: 'id-1',
        nameTab: 'Model',
        nameTitle: 'Model',
        bodyInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos eveniet quas optio laboriosam provident ipsam dicta iure in? Culpa eum sequi laboriosam iste pariatur cumque fugiat, esse ullam quam!',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/062/468/original/launching-new-business-models-concept-icon-vector.jpg',
    },
    {
        target: 'id-2',
        bodyId: 'id-2',
        nameTab: 'Energy',
        nameTitle: 'Energy',
        bodyInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, labore libero pariatur nulla tempora cumque aliquid quas totam, est nemo omnis velit dolor. Quam, molestias ea. Porro nesciunt ea a, nostrum pariatur, et voluptas qui vitae deleniti, assumenda sequi totam?',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/355/785/non_2x/renewable-energy-security-concept-icon-vector.jpg',
    },
    {
        target: 'id-3',
        bodyId: 'id-3',
        nameTab: 'Design',
        nameTitle: 'Design',
        bodyInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, id perferendis. Numquam eligendi unde, neque rem perspiciatis, beatae maxime sit quod doloremque earum fuga. Reiciendis architecto minima est consectetur expedita.',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/062/644/original/product-design-concept-icon-vector.jpg',
    },
];

const tabHeaderElements = document.querySelector('.tab-header__elements');
const tabBodyElements = document.querySelector('.tab-body__elements');

let tabHeaderElement;
let tabBodyElementContainer;


tabs.forEach(tab=>{
    tabHeaderElement = document.createElement('div');
    let nameTabElement = document.createElement('span');

    tabBodyElementContainer = document.createElement('div');
    tabBodyElementContainer.classList.add('tab-body-element__container');

    let tabBodyInfoElement = document.createElement('div');
    tabBodyInfoElement.classList.add('tab-body__info');
    tabBodyInfoElement.innerHTML = tab.bodyInfo;

    let tabBodyImageElement = document.createElement('div');
    tabBodyImageElement.classList.add('tab-body__image');

    let image = document.createElement('img');
    image.src = tab.imgSrc;

    let titleElement = document.createElement('h1');
    titleElement.innerHTML = tab.nameTitle;
    titleElement.classList.add('title');
    tabBodyInfoElement.prepend(titleElement);

    nameTabElement.innerHTML = tab.nameTab;
    tabHeaderElement.classList.add('tab-header__element');

    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = 'More';

    tabHeaderElement.append(nameTabElement);
    tabHeaderElement.dataset.target = tab.target;
    tabHeaderElements.append(tabHeaderElement);

    tabBodyElementContainer.id = tab.bodyId;
    tabBodyElements.append(tabBodyElementContainer);
    tabBodyElementContainer.append(tabBodyInfoElement);
    tabBodyElementContainer.append(tabBodyImageElement);
    tabBodyInfoElement.append(button);
    tabBodyImageElement.append(image);

    tabHeaderElement.addEventListener('click', doActiveTab);


    // header.addEventListener('click', (e)=>{
    // clearTab();
    // header.classList.add('active');

    //     let titleElement = document.createElement('h1');
    //     titleElement
    //     header.append(titleElement);
    // });
});



function doActiveTab(e){
    clearTab();
    let currentHeader = e.target.closest('div.tab-header__element');
    currentHeader.classList.add('active');
    
    let currentBody = document.querySelector(`#${currentHeader.dataset.target}`);
    currentBody.classList.add('active');
    
}

function clearTab(){
    document.querySelectorAll('.tab-header__element').forEach(item =>{
        item.classList.remove('active');
    });
    document.querySelectorAll('.tab-body-element__container').forEach(item =>{
        item.classList.remove('active');
    });
}