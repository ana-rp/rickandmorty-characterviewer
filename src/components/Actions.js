export function getPersonajes(fnCallback, name = null, status = null, url = null) {
    var urlPersonajes = "https://rickandmortyapi.com/api/character";
    if(url) {
        urlPersonajes = url;
    }
    else {
        if(name) {
            urlPersonajes += "?name=" + name;
        }
        if(status) {
            urlPersonajes += (name ? "&" : "?") +  "status=" + status
        }
    }

    fetch(urlPersonajes)
			.then((response) => response.json())
			.then((result) => {
				fnCallback(result);
			});
}