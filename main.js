let dialogCalculator = document.querySelector(".dialogCalculator")
let card_inner_answer_input = document.querySelector(".card_inner_answer_input")
// btns_functional
let btn_c = document.querySelector(".btn_c")
// btn_c
btn_c.onclick = () => {
    card_inner_answer_input.value = ""
}

let btn_bracket = document.querySelector(".btn_bracket")
let btn_precent = document.querySelector(".btn_precent")
btn_precent.onclick = () => {
    card_inner_answer_input.value += "%"
}
let btn_devision = document.querySelector(".btn_devision")
btn_devision.onclick = () => {
    card_inner_answer_input.value += "/"
}

let btn_plus = document.querySelector(".btn_plus")
btn_plus.onclick = () => {
    card_inner_answer_input.value += "+"
}
let btn_multi = document.querySelector(".btn_multi")
btn_multi.onclick = () => {
    card_inner_answer_input.value += "*"
}
let btn_minus = document.querySelector(".btn_minus")
btn_minus.onclick = () => {
    card_inner_answer_input.value += "-"
}
let btn_row3all = document.querySelector(".btn_row3all")
btn_row3all.onclick = () => {
    if (card_inner_answer_input.value > 0) {
        card_inner_answer_input.value = card_inner_answer_input.value * (-1)
    } else if (card_inner_answer_input.value < 0) {
        card_inner_answer_input.value = card_inner_answer_input.value * (1)
    } else card_inner_answer_input.value == card_inner_answer_input.value
}
let btn_dot = document.querySelector(".btn_dot")
btn_dot.onclick = () => [
    card_inner_answer_input.value += "."
]
let btn_equal = document.querySelector(".btn_equal")
btn_equal.onclick = () => {
    card_inner_answer_input.value = eval(card_inner_answer_input.value)
}
// btns_numbers
let zero = document.querySelector(".zero")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")

// zero
zero.onclick = () => {
    card_inner_answer_input.value += 0
}

// one
one.onclick = () => {
    card_inner_answer_input.value += 1
}

// two
two.onclick = () => {
    card_inner_answer_input.value += 2
}

// three
three.onclick = () => {
    card_inner_answer_input.value += 3
}

// four
four.onclick = () => {
    card_inner_answer_input.value += 4
}

// five
five.onclick = () => {
    card_inner_answer_input.value += 5
}

// six
six.onclick = () => {
    card_inner_answer_input.value += 6
}

// seven
seven.onclick = () => {
    card_inner_answer_input.value += 7
}

// eight
eight.onclick = () => {
    card_inner_answer_input.value += 8
}

// nine
nine.onclick = () => {
    card_inner_answer_input.value += 9
}


