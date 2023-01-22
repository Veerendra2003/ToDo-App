const addForm = document.addfrm;
const textItem = addForm.add;
const ul = document.querySelector('.todos');
const addItem = (item)=>{
    let str = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${item}</span>          
<i class="far fa-trash-alt delete"></i>
</li>`;
    ul.innerHTML+=str;
}
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(textItem.value.length != 0)
     addItem(textItem.value);
     textItem.value='';
})
ul.addEventListener('click',(e)=>{
    if(e.target.nodeName == "I")
    e.target.parentElement.remove();
})
const searchList = (str)=>{
    let all_Li = ul.children;
    for(let li of all_Li){
        if(li.innerText.toLowerCase().includes(str)===false){
            li.classList.add("filtered");
        }
        else{
            li.classList.remove("filtered");
        }
    }

}
let searchText = document.querySelector('.search input');
searchText.addEventListener('keyup',(e)=>{
    searchList(searchText.value.toLowerCase().trim());
})

// const color = document.getElementById('changeColor');
// color.oninput = ()=>{
//     document.body.style.backgroundColor = color.value;
// }