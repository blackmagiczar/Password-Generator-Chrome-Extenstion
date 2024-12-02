window.addEventListener("load", Load);

function Load() {
  document.getElementById("copy").addEventListener("click", copyPassword);
  document
    .getElementById("lengthSlide")
    .addEventListener("input", updateLength);
  document
    .getElementById("generatePassword")
    .addEventListener("click", genPass);
}

function copyPassword() {
  let copyText = document.getElementById("output");
  navigator.clipboard.writeText(copyText.innerHTML);
}

function updateLength() {
  let out = document.getElementById("length");
  out.innerHTML = document.getElementById("lengthSlide").value;
  generatePassword();
}

function genPass() {
  let password = "";
  let length = document.getElementById("lengthSlide").value;
  let arr = [generateLowercase];

  while (length > 0) {
    let chooseCharacter = Math.round(Math.random() * 0);

    arr.push(generateUppercase);

    arr.push(generateNumbers);

    arr.push(generateSymbols);

    chooseCharacter = Math.round(Math.random() * (-1 + arr.length));
    password += arr[chooseCharacter]();
    length--;
  }

  document.getElementById("output").innerHTML = password;
}

function generateLowercase() {
  let min = 97,
    max = 122;
  return String.fromCharCode(Math.random() * (max - min) + min);
}

function generateUppercase() {
  let min = 65,
    max = 90;
  return String.fromCharCode(Math.random() * (max - min) + min);
}

function generateNumbers() {
  let min = 48,
    max = 57;
  return String.fromCharCode(Math.random() * (max - min) + min);
}

function generateSymbols() {
  let min = 32,
    max = 127;
  let rand = Math.random() * (max - min) + min;
  if (
    (rand >= 97 && rand <= 122) ||
    (rand >= 65 && rand <= 90) ||
    (rand >= 48 && rand <= 57)
  ) {
    return generateSymbols();
  } else return String.fromCharCode(rand);
}
