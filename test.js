function additionCalculatorTester() {
    if(additionCalculator(4, 6) === 10){
        console.log("Test 1 passed")
    }
    else {
        console.error("Test failed")
    }
}

function additionCalculatorTesterV2() {
    arrowAdditionCalculator(4, 6) === 10 ? console.log("test 1/V2 passed") : console.error("Test failed")
}

function additionCalculator(first_number, second_number){
     return first_number + second_number;
}

const arrowAdditionCalculator = (first_number, second_number) => first_number + second_number


additionCalculatorTester(4, 6)

additionCalculatorTesterV2(4, 6)