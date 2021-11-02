const images = document.querySelectorAll('.image');
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab=>{
    tab.addEventListener('click', (e) => {
        doActiveTab(e);
    })
});


function doActiveTab(e){
    clearTab();
    // console.log(e.target); //возвращает элемент на который произведен был щелчок, он может отличаться(он внутри события и поднимается наверх)
    // console.log(e.currentTarget); //элемент для которого мы прописали это событие
    // console.log(e.target.closest('div.tab-header__item')); //ищу родителя для текущего элемента

    let currentTab = e.target;
    currentTab.classList.add('active');

    let currentBody = document.querySelector(`#${currentTab.dataset.target}`);
    currentBody.classList.add('active');
}

function clearTab(){
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    images.forEach(image => {
        image.classList.remove('active');
    });
}

