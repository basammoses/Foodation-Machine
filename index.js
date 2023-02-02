const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71af68df7mshd2357862033bf0ep127bf3jsn73c3e1bc8818',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};
const foodpics = document.getElementById('foodpic')
const select = document.querySelector('select')
//let userInput = ''
const urlInput = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr='

async function getFoodInfo() {
  const res = await fetch(`${urlInput}{}`, options)
  const json = await res.json()
  console.log(json)

}
  

async function FoodInfo(id) {
  const res = fetch(`${urlInput, id}`, options)
  const json = await res.json()
  console.log(json)
  return json
  
}

select.addEventListener('change', async e => {
  const food = await FoodInfo(e.target.value)
  console.log(food)

})
  



