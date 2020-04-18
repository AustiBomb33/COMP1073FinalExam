let button = document.querySelector("button");
let main = document.querySelector("main");
let cats;

$.getJSON("./cats.json", function(json){
  cats = json.cats;
})


button.addEventListener('click', function(e){
  cats.forEach((cat, i) => {
    let para = document.createElement('p');
    let catInfo = `${cat['name']}<br>${cat['species']}<br>${cat['favFoods']}<br>${cat['age']}<br>`;
    para.innerHTML = catInfo;
    main.appendChild(para);
  });
  e.preventDefault();
});
