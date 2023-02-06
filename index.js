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
  //const nutriResults = json.parsed[0].food.nutrients
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
   const group = document.querySelector('.group')
  const nutri2 = document.querySelector('.nutrition2')
  nutri2.innerHTML = ''
  // let divv = document.createElement(`div`)
  // divv.className = 'nutrition2'
  // group.appendChild(divv)
  console.log(nutri2)
  
  
  for (let i = 0; i < allChoices.length; i++) {
    const multiChoices = allChoices[i].food
      console.log(multiChoices)
     
      
      let p = document.createElement('p')
      p.className = 'foodname'
      nutri2.appendChild(p)
    p.innerText = multiChoices.label
    p.addEventListener('click', (e) => { 
      setNutri(multiChoices.nutrients)
      results.src = multiChoices.image

    })
  
      
   const calories2 = multiChoices.nutrients.ENERC_KCAL
   console.log(calories2)
    const fatcontent2 = multiChoices.nutrients.FAT
   console.log(fatcontent2)
   const fiber2 = multiChoices.nutrients.FIBTG
   console.log(fiber2)
   const protein2 = multiChoices.nutrients.PROCNT
   console.log(protein2)
   const carbs2 = multiChoices.nutrients.CHOCDF
   console.log(carbs2)
      
    
    
    }
      

  

    setNutri(json.parsed[0].food.nutrients)



  input.value = ''
    
    // ul.innerText = totalNutri[i]
 
  
  // results2.innerHTML = newResults
results.src = imageResult
document.querySelector('.label').textContent = `${labelResult} (per serving)`
  
  
  
  console.log(results)  

//  for (let i = 0; i <  )
    
})
  


function setNutri(arr) {
  
    
  let totalNutri2 = ['Calories', 'Fat', 'Fiber', 'Protein', 'Carbs']
  let totalNutri = [arr.ENERC_KCAL, `${arr.FAT} grams`, `${arr.FIBTG} grams`, `${arr.PROCNT} grams`, `${arr.CHOCDF} grams`]
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

}
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
