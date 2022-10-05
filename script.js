let myLibrary = [];

let i = 0;

function getbook(){

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('isRead').checked;
    
    myLibrary.push({title, author, pages, read});

    const newDiv= document.createElement('div');
    const delButton = document.createElement('button');

    delButton.setAttribute('class','delButton');
    delButton.setAttribute('onclick','deleteParent()');


    newDiv.className = 'card';
    newDiv.innerHTML += '<h1>'+title+'</h1>';
    newDiv.innerHTML += '<p>'+author+'</p>';
    newDiv.innerHTML += '<p>'+pages+'</p>';
    if(read == true){
        newDiv.innerHTML += '<p>Aleady read</p>';
    }else{
        newDiv.innerHTML += '<p>Not read</p>';
    }
    document.getElementsByClassName("container")[0].appendChild(newDiv);

}

function deleteParent() {

}

console.log(myLibrary);