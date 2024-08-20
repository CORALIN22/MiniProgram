'use strict';
import { books } from './booksData.js'; 

const btn =document.querySelector(".btn");

//Function for creating a dynamic element
const creatingEl=(tagName)=>{
  const el= document.createElement(tagName);
  return el;
}

//creating container
let container=creatingEl('div');
container.className="cont";
document.body.appendChild(container);

const updateContainer=(book)=>{
if (container) {
    container.innerHTML="";
}
if (book) {
const title=creatingEl('h1');
title.className='title';
title.textContent=book.title;
const author=creatingEl('p');
author.className='author';
author.textContent=book.author;
const year=creatingEl('p');
year.className='year';
year.textContent=book.year;
const genre=creatingEl('p');
genre.className='genre';
genre.textContent=book.genre;





const img = creatingEl('img');
img.className = "img";
img.src = book.imagePath; // Set the image source using the `books` object
console.log(img.src);
container.appendChild(img);
container.appendChild(title);
container.appendChild(author);
container.appendChild(year);
container.appendChild(genre);


}else {
    container.appendChild(document.createTextNode('No books found'));
}
}

btn.addEventListener("click",function(){
 const searchValue=document.querySelector(".searchInput").value;
if(searchValue==="") {
console.log('empty');
}else 
{
  const book=books.find(b=> b.title.toLowerCase() === searchValue.toLowerCase());
  updateContainer(book);

}
})




