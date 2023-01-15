// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('IT WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// });
// firstReq.addEventListener('error', () => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

// const firstReq = new XMLHttpRequest()
// firstReq.addEventListener('load', function(){
//     console.log("IT WORKS")
//     const data = JSON.parse(this.responseText)
//     if (data.results[0].films && data.results[0].films[0]) {
//         const filmURL = data.results[0].films[0]
//         const filmReq = new XMLHttpRequest()
//         filmReq.addEventListener('load', function() {
//             console.log("IT WORKS")
// 			const filmData =  JSON.parse(this.responseText)
// 			console.log(filmData)
//         })
//         filmReq.addEventListener('error', function(e){
//             console.log('error', e)
//         })

//         filmReq.open('GET', filmURL)
//         filmReq.send()
//         console.log('Request Sent')
//     }
// })
// firstReq.addEventListener('error', () =>{
//     console.log("ERRORR!!!!!")
// })

// firstReq.open('GET', 'https://swapi.dev/api/planets')
// firstReq.send()
// console.log('Request Sent!')

const checkError = (data) => {
	if(!data.ok)throw new Error(`Status Code Error: ${data.status}`)
		return data.json() // convert data to javascript
}

const fetchPlanet = (data) => {
	console.log('FETCH 10 NAME PLANETS')
	for(let planet of data.results){
		console.log(planet.name)
	}
	return Promise.resolve(data.next)
}

const nextURL = (url) =>{
	return fetch(url)
}

fetch('https://swapi.dev/api/planets')
.then(checkError)
.then(fetchPlanet)
.then(nextURL)
.then(checkError)
.then(fetchPlanet)
.then(nextURL)


.catch((err)=>{
	console.log(`WE HAVE ERROR: ${err.message}`)
   }); // REFACTOR

// const checkStatusandParse = (response) => {
// 	if (!response.ok)throw new Error(`Status Code Error: ${response.status}`)
// 		return response.json() // convert data to javascript
// }
// const printPlanets = (data) =>{
// 	console.log('Loaded 10 more planets')
// 	for(let planet of data.results){
// 		console.log(planet.name)
// 	}
// 	return Promise.resolve(data.next)	
// }
// const fetchNextPlanets = (url) =>{
// 	return fetch(url)
// }

// fetch('https://swapi.dev/api/planets')
// .then(checkStatusandParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .then(checkStatusandParse)
// .then(printPlanets)
// .then(checkStatusandParse)
// .then(printPlanets)
// .then(fetchNextPlanets)
// .catch((err)=>{
// 	console.log(`WE HAVE ERROR: ${err.message}`)
//    }); // REFACTOR