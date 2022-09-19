function SDropDown(){
    const dropDownMenu = document.createElement('div');
    dropDownMenu.classList.add('Sdropdownbase');

    dropDownMenu.innerHTML = `
    <button class = 'Menu'>Menu</button>
    <div class = 'Sitem'>Item 2</div>
    <div class = 'Sitem'>Item 3</div>
    <div class = 'Sitem'>Item 4</div>
    <div class = 'Sitem'>Item 5</div>
    `;

    dropDownMenu.addEventListener('click',function(){
        dropDownMenu.classList.add('Sdropdownfull')
    })


}