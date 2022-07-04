
let search_btn = () =>{
    let search_input = document.getElementById('search_input');
    let search_text = search_input.value ;
    //console.log(search_text);
    search_input.value = '';

    let url = `https://www.googleapis.com/books/v1/volumes?q=${search_text}`;
    //console.log(url) ;
    fetch(url)
    .then(res => res.json())
    .then(data =>displaySearch(data.items))
}
let displaySearch = (items) =>{
    //console.log(items);
    let search_result = document.getElementById('search_result');
    items.forEach(item => {
        console.log(item);
        let div =document.createElement('div')
        div.classList.add('col');
        div.innerHTML=`
        <div class="card">
            <img src="${item.volumeInfo.imageLinks.smallThumbnail}" class="card-img-top"  alt="Book Image"/>
            <div class="card-body">
              <h5 class="card-title">${item.volumeInfo.title}</h5>
              <h2>${item.volumeInfo.authors}</h2>
              <p class="card-text">${item.volumeInfo.description.slice(0,100)}</p>
            </div>
          </div>`
          search_result.appendChild(div);
    });
}