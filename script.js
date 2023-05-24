
// get DOM elements
let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    // get bill amount
    let bill = Number(billInput.value)

    // get tip percentage
    let tipPercentage = Number(tipInput.value) / 100

    // calculate tip amount
    let tipAmount = bill * tipPercentage

    // calculate total bill amount
    let total = bill + tipAmount

    // calculate the total per person
    let perPersonTotal = total / numberOfPeople

    // update DOM element
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}

const increasePeople = () => {
    // increment number of people
    numberOfPeople = numberOfPeople + 1

    // update number 
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

const decreasePeople = () => {
    // if num of people is already 1 or less return
    if (numberOfPeople <= 1){
        return 
    }
    
    // decrement number of people
    numberOfPeople = numberOfPeople - 1

    // update number
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()

}

