const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71af68df7mshd2357862033bf0ep127bf3jsn73c3e1bc8818',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));