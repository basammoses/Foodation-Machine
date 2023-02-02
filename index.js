const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71af68df7mshd2357862033bf0ep127bf3jsn73c3e1bc8818',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};
const input = document.querySelector('input')
const foodpics = document.getElementById('foodpic')
const select = document.querySelector('select')
//let userInput = ''
const form = document.querySelector('form')
let results = document.getElementsByClassName('results')

const urlInput = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr='



form.addEventListener('submit', async element => {
  element.preventDefault()
  let userInput = input.value
  const res = await fetch(`${urlInput}${userInput}`, options)
  console.log(res)
  const json = await res.json()
  //console.log(input.value)
  //console.log(userInput)
  console.log(json)
  
  
  // results.innerHTML = json
  // let text = '';
  // for (let parsed in json) {
  //   text += json[parsed]
  //   console.log(text)
    
  // }
  
    
})
  

  // async function FoodInfo(id) {
  //   const res = fetch(`${urlInput, id}`, options)
  //   const json = await res.json()
  //   console.log(json)
  //   return json
  
  // }

  // form.addEventListener('submit', async e => {
  
  
  //   const food = await FoodInfo()
  //   console.log(food)

  // })
  


  // const handleClick = async () => {
  //   const info = await getMovieDetails(imbdID)
  //   console.log(info)
  // }

  // async function getFoodDetails(input) {
  //   const res = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=62a37e61`)
  //   const json = await res.json()
  //   return json
  //
