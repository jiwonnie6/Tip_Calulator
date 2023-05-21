/*
tip calculator

must use three functions

calculateBill()
increasePeople()
decreasePeople()
*/

// need ids for bill input, tip input, number of people, and per person total div

let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    let bill = Number(billInput.value)

    let tipPercentage = Number(tipInput.value) / 100

    let tipAmount = bill * tipPercentage

    let total = bill + tipAmount

    let perPersonTotal = total / numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}

const increasePeople = () => {
    numberOfPeople = numberOfPeople + 1

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}

const decreasePeople = () => {

    if (numberOfPeople <= 1){
        return 
    }
    
    numberOfPeople = numberOfPeople - 1

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()

}

