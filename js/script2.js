let tabs=[
    {
        header: 'Один',
        body: 'Первая вкладка',
        target: 'tab-1'
    },
    {
        header: 'Два',
        body: 'Вторая вкладка',
        target: 'tab-2'
    },
    {
        header: 'Три',
        body: 'Первая вкладка',
        target: 'tab-3'
    }
];



const tabHeader = document.querySelector('.tab-header');
const tabBody = document.querySelector('.tab-body');


tabs.forEach(tab => {
    let divHeader = document.createElement('div');
    divHeader.classList.add('tab-header__item');
    divHeader.dataset.target = tab.target;
    divHeader.innerHTML = `<span>${tab.header}</span>`;
    divHeader.addEventListener('click', doActiveTab);


    let divBody = document.createElement('div');
    divBody.classList.add('tab-body__item');
    divBody.innerHTML = `<span>${tab.body}</span>`;
    divBody.id = tab.target;

    tabHeader.append(divHeader);
    tabBody.append(divBody);
});

function doActiveTab(e){
    clearTab();
    // console.log(e.target); //возвращает элемент на который произведен был щелчок, он может отличаться(он внутри события и поднимается наверх)
    // console.log(e.currentTarget); //элемент для которого мы прописали это событие
    // console.log(e.target.closest('div.tab-header__item')); //ищу родителя для текущего элемента

    let currentHeader = e.target.closest('div.tab-header__item');
    currentHeader.classList.add('active');

    let currentBody = document.querySelector(`#${currentHeader.dataset.target}`);
    currentBody.classList.add('active');
}

function clearTab(){
    [...tabHeader.children].forEach(item => {
        item.classList.remove('active');
    });

    [...tabBody.children].forEach(item => {
        item.classList.remove('active');
    });
}