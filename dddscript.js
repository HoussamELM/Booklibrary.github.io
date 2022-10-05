let myLibrary = [
    {
        "title": "Book1",
        "author": "Houssam",
        "pages": "23",
        "read": true
    },
    {
        "title": "Book2",
        "author": "Houssam",
        "pages": "23",
        "read": false
    }
];

function getbook(){
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('isRead').checked ? true : false;
    
    myLibrary.push({title, author, pages, read});
}




function addbook(){

    for (i = 0; i < myLibrary.length; i++){
        const newDiv= document.createElement('div');
        newDiv.className = 'card';
        newDiv.innerHTML += '<h1>'+myLibrary[i].title+'</h1>';
        newDiv.innerHTML += '<p>'+myLibrary[i].author+'</p>';
        newDiv.innerHTML += '<p>'+myLibrary[i].pages+'</p>';
        if(myLibrary[i].read == true){
            newDiv.innerHTML += '<p>Aleady read</p>';
        }else{
            newDiv.innerHTML += '<p>Not read</p>';
        }
        document.getElementsByClassName("container")[0].appendChild(newDiv);
    }

}

console.log(myLibrary)