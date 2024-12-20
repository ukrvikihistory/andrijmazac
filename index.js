const image=document.querySelector("#img") 
 let list=document.querySelector(".list") 
 const nav = document.querySelector("nav") 
 const header = document.querySelector("header") 
 const button = document.querySelector("button")  
 button.addEventListener("click",addMenu) 
 header.style.alignItems="center";
 function addMenu(){ 
    if(list.classList.contains("active")){ 
        list.classList.remove("active") 
        img.src = ("img/menu.jpg") 
        nav.style.height("auto") 
        header.style.alignItems("center") 
        button.classList.remove("rotate") 
    } 
    else{ 
        list.classList.add("active") 
        img.src = ("img/krest.jpg") 
    } 
 } 
addMenu()
let heart = document.querySelector('.heart') 
let likeNumber = document.querySelector('.likes-number') 
function onclick(){ 
    heart.classList.toggle('added') 
    if (heart.classList.contains('added')){ 
        likeNumber.textContent = '29' 
    } 
    else{ 
        likeNumber.textContent = '28' 
    } 
} 
heart.addEventListener('click', onclick)

const commentForm = document.querySelector('.comment-form') 
const commentList = document.querySelector('.comment-list') 
const submitButton = document.querySelector('.submit-button') 
const commentField = document.querySelector('.comment-field') 
commentForm.addEventListener('submit', form) 
function form(e){ 
    e.preventDefault() 
    let inputValue = e.target.elements.commentField.value 
    let list = document.createElement('li') 
    list.classList.add('user-comment')
    commentList.append(list)  
    list.textContent = inputValue 
    commentField.value = '' 
}


