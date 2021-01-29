// console.log("INDIA");
let NEWS = document.getElementById('headlines');
// console.log("NEWS " + NEWS);
NEWS.innerHTML = "Loading..."

fetch('https://gnews.io/api/v4/top-headlines?lang=en&topic=health&country=in&token=492ba7f915d485580d99f0f7dbfa5fbd')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let articles = data.articles;
        // console.log(articles);
        let headlines = "";
        for (i = 0; i < 5; i++) {
            element = articles[i];
            // console.log(element);
            headlines += `<div class="media">
                <img src="${element.image}" alt="...">
                <div class="media-body">
                <a href="${element.url}" target="_blank"><h2>${element.title}</h2></a><br>
                <p>${element.description}</p>
                Published By : ${element.source.name} at ${element.publishedAt}
                </div>
                </div>`
        };
        NEWS.innerHTML = headlines;
    });