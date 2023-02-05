const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71af68df7mshd2357862033bf0ep127bf3jsn73c3e1bc8818',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};
// const nutri1 = document.querySelector()
// const nutri2 = document.querySelector()
// const nutri3 = document.querySelector()
// const nutri4 = document.querySelector()
let feedbackCalorie = document.querySelector('#calorie')
let feedbackProtein = document.querySelector('#protein')
const input = document.querySelector('input')
const foodpics = document.getElementById('foodpic')
const select = document.querySelector('select')
//let userInput = ''
const form = document.querySelector('form')
let results2 = document.querySelector('.footer')
let results = document.querySelector('img')
const urlInput = 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr='



form.addEventListener('submit', async element => {
  element.preventDefault()
  let userInput = input.value
  const res = await fetch(`${urlInput}${userInput}`, options)
  // console.log(res)
  const json = await res.json()
  //console.log(input.value)
  //console.log(userInput)
  // console.log(json)
  console.log(json)
const imageResult = json.parsed[0].food.image
const labelResult = json.parsed[0].food.label
  const nutriResults = json.parsed[0].food.nutrients
  //const newResults = JSON.stringify(nutriResults)
  const calories = json.parsed[0].food.nutrients.ENERC_KCAL
  console.log(calories)
  const fatcontent = json.parsed[0].food.nutrients.FAT
  console.log(fatcontent)
  const fiber = json.parsed[0].food.nutrients.FIBTG
  console.log(fiber)
  const protein = json.parsed[0].food.nutrients.PROCNT
  console.log(protein)
  const carbs = json.parsed[0].food.nutrients.CHOCDF
  console.log(carbs)
  
  const allChoices = json.hints
   
  
    for (let i = 0; i < allChoices.length; i++) {
    const multiChoices = allChoices[i].food.nutrients
      console.log(multiChoices)
      for  (let ENERC_KCAL in multiChoices) {
        console.log(ENERC_KCAL)
      }
      

    }

  

  


  let totalNutri2 = ['Calories', 'Fat', 'Fiber', 'Protien', 'Carbs']
  let totalNutri = [calories, `${fatcontent} grams`, `${fiber} grams`, `${protein} grams`, `${carbs} grams`]
  results2.innerHTML = ''
  for (let i = 0; i < totalNutri.length; i++) {
    
    
    let p = document.createElement('p')
      p.classList = 'nutrition'
      results2.appendChild(p)
    p.innerText = `${totalNutri2[i]}: ${totalNutri[i]}`

    
  }
  console.log(totalNutri[0])
  if (totalNutri[0] <= 150) {
    console.log('sucess!')
  
    console.log(feedbackCalorie)
    feedbackCalorie.innnerText = "This food is a good low calorie choice!"

    
  }
  if (totalNutri[1] <= 10) {
    feedbackProtein.innerHTML = "This food is high is protein!"
  }
  input.value = ''
    
    // ul.innerText = totalNutri[i]
 
  
  // results2.innerHTML = newResults
results.src = imageResult
document.querySelector('.label').textContent = `${labelResult} (per serving)`
  
  
  
  console.log(results)  

//  for (let i = 0; i <  )
    
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
