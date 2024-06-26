// create an array to store names
const namesArray = []

function addName() {
    const nameInput = document.getElementById('nameInput') // storing name input element as a variable
    const name = nameInput.value.trim() //get the TRIMMED value of the input box and store in a var
    
    if (name === null || name === '') [
        name = alert('Please enter a name')]
    
    namesArray.push(name) //add the name to the end of the array
    displayNames() //call the displayNames function to update the list
    
    nameInput.value = '' //Clear the input field after adding the name
}

function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' //clear out the previous list items

    for (let i = 0; i < namesArray.length; i++){
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)//adds a span tag nested between every <li> tag (the child)
        nameList.appendChild(li)
    }

}

function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    //Generate and select a random name from names array
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber] 

    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames();
        
    // confetti function
    confetti({
        particleCount: 100,
        spread: 160
      });

}


//Event listener for the button click to add a name
document.getElementById('addNameBtn').addEventListener('click', addName)

//Event listener for the button click to select and siplay a rndm name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName)

//Event Listener to add a name using the enter button
document.addEventListener('keypress', (event)=>{
    let keyCode = event.key ? event.key : ''

    if(event.key === 'Enter') {
        addNameBtn.click();

    }
}) 

