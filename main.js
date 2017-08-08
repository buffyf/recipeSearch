var displayArea = document.querySelector(".images");
var search = document.querySelector("#search");


// let url = `http://recipepuppyproxy.herokuapp.com/api/?q=${search.value}`;

function ourCallback(e) {
    if (e.keyCode === 13) {
         displayArea.innerHTML="";
        let url = `http://recipepuppyproxy.herokuapp.com/api/?q=${search.value}`;
        fetch(url).then(function (response) {
            response.json().then(function (data) {
                let results = data.results;
                console.log(results);

                for (var i = 0; i < results.length; i++) {
                    let imgSrc = results[i].thumbnail;
                    if (imgSrc === '') {
                        displayArea.innerHTML += `<span>No Image Available</span>;`
                    } else {
                        displayArea.innerHTML += `<img src="${imgSrc}" alt="" class="thumb">`
                    }
                }
                //   for (var i = 0; i < results.length; i++) {
                //     let title = results[i].title;
                //     if (title === '') {
                //         displayArea.innerHTML += `<span>No Title Available</span>;`
                //     } else {
                //         displayArea.innerHTML += `<p>${title}</p>`
                //     }
                // }
               search.value="";
            });
        });
    }
}

search.addEventListener("keypress", ourCallback);
search.addEventListener("click", function(){
    displayArea.innerHTML="";
    search.value="";
})





