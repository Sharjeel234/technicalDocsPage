let arrow = document.querySelectorAll('.arrow')

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu')
    })
    
}

let sidebar = document.querySelector('.sidebar')
let menu = document.querySelector('.bx-menu')
menu.addEventListener('click', ()=>{
    sidebar.classList.toggle('close')
})


// Create active class in selected list items 

let list = document.querySelectorAll('.list')

function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) => 
item.addEventListener('click', activeLink))

// Create active class in selected sublist items

let subList = document.querySelectorAll('.nav-links li .sublist')
for (let i=0; i<subList.length; i++)
{
    subList[i].onclick = function(){
        let j = 0;
        while(j < subList.length){
            subList[j++].className = 'sublist';
        }
        subList[i].className = 'sublist active';
        list.forEach((item) => 
        item.addEventListener('click', activeLink))
    }
}

