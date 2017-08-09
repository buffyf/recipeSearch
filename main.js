var displayArea = document.querySelector(".images");
var search = document.querySelector("#search");
var noImage= "https://cdn4.iconfinder.com/data/icons/travel-2/500/breakfast_delicious_dinner_eat_food_fork_fun_holiday_knife_plate-512.png"


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
                    let title = results[i].title;
                    let href = results[i].href;
                    if (imgSrc === '') {
                        displayArea.innerHTML += `<a href ="${href}" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1442837463_Imgggg.jpg"><div class="caption">${title}</div></a>`;

                    } else {
                        displayArea.innerHTML += `<a href ="${href}" target="_blank"><img src=${imgSrc}><div class="caption">${title}</div></a>`;

                        
                    }
                }

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





