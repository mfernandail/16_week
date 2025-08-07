const btnGenetare = document.getElementById('generateBtn')
const numCharacter = document.getElementById('numCharacter')
const includeNumbers = document.getElementById('includeNumbers')

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'

btnGenetare.addEventListener('click', generatePassword)

function generatePassword() {
  if (Number(numCharacter.value) <= 0) {
    return
  }

  let password = ''
  let indexPass = []

  for (let i = 0; i < Number(numCharacter.value); i++) {
    indexPass.push(Math.floor(Math.random() * 26))
  }

  const charactersArr = characters.split('')
  const numbersArr = numbers.split('')

  password = indexPass.map((i) => {
    return charactersArr[i]
  })

  console.log(indexPass)
  console.log(password)

  //console.log(charactersArr, numbersArr)
}
