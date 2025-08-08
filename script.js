const btnGenetare = document.getElementById('generateBtn')
const numCharacterInput = document.getElementById('numCharacter')
const includeNumbersCheck = document.getElementById('includeNumbers')
const result = document.getElementById('result')

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const LOWERCASE = UPPERCASE.map((letter) => letter.toLowerCase())
const NUMBERS = '0123456789'.split('')
const SYMBOLS = '!@#$%^&*()-_=+{}[]|:;<>,.?/'.split('')

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'

let includeNumbers

let numCharacter = 52

btnGenetare.addEventListener('click', generatePassword)

function generatePassword() {
  let pool = []
  let password = ''

  if (
    Number(numCharacterInput.value) < 4 ||
    Number(numCharacterInput.value) >= 21
  ) {
    alert(
      'The password must be at least 4 characters and less than 21 characters long'
    )
    return
  }

  if (includeNumbersCheck.checked) {
    pool = [...UPPERCASE, ...LOWERCASE, ...SYMBOLS, ...NUMBERS]
  } else {
    pool = [...UPPERCASE, ...SYMBOLS, ...LOWERCASE]
  }

  for (let i = 0; i < Number(numCharacterInput.value); i++) {
    const randomIndex = Math.floor(Math.random() * pool.length)
    password += pool[randomIndex]
  }

  result.textContent = password
}
