const btnGenerate = document.getElementById('generateBtn')
const numCharacterInput = document.getElementById('numCharacter')
const includeNumbersCheck = document.getElementById('includeNumbers')
const result = document.getElementById('result')
const msgCopy = document.getElementById('msgCopy')

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const LOWERCASE = UPPERCASE.map((letter) => letter.toLowerCase())
const NUMBERS = '0123456789'.split('')
const SYMBOLS = '!@#$%^&*()-_=+{}[]|:;<>,.?/'.split('')

let showMsg = false

btnGenerate.addEventListener('click', generatePassword)
result.addEventListener('click', copyPassword)

function generatePassword() {
  let pool = []
  let password = ''

  const lengthPassword = Number(numCharacterInput.value) || 0

  if (lengthPassword < 4 || lengthPassword >= 21) {
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

function copyPassword() {
  if (!showMsg) {
    const password = result.textContent.trim()
    msgCopy.textContent = ''

    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          msgCopy.textContent = 'Password copied to clipboard'
          msgCopy.classList.add('copyPassword')
        })
        .catch((err) => {
          msgCopy.textContent = `Error copying to clipboard ${err}`
          msgCopy.classList.add('copyPassword copyPasswordError')
        })
    }
    result.disabled = true
    showMsg = true
  }

  setTimeout(() => {
    msgCopy.textContent = ''
    showMsg = false
    result.disabled = false
  }, 3000)
}
