const search = ()=>{
    var input = document.querySelector('.search-block > input');
    var searchBtn = document.querySelector('.search-block > button');

    searchBtn.addEventListener('click', ()=>{
        console.log(input.value);
    })

}

search();