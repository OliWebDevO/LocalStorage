const formBox = document.querySelector('.ask'),
      profileBox = document.querySelector('.profile');

// =========================================
// 🧠 Functioooooooooooooonzzzzzzzzzzzzz 🧠
// =========================================

// Get the infoooooooooo
function getInfo(name = formBox.querySelector('.name').value, url = formBox.querySelector('.avatar').value) {
  localStorage.setItem('myNickname', name)
  localStorage.setItem('myUrl', url)
}

// Display the infoooooooo
function displayInfo(name = localStorage.getItem('myNickname'), url = localStorage.getItem('myUrl')) {
  profileBox.querySelector('.profile__name').innerHTML = name
  profileBox.querySelector('.profile__pic').style.backgroundImage = `url(${url})`
}

// Make the pannels moooooooove YaY
function switchPanels(){
    formBox.classList.toggle('move')
    profileBox.classList.toggle('move')
}

// =============
// 💥 Eventz 💥
// =============

// Check if localStorage is empty or not and if it's filled with datas ...
if(localStorage.getItem('myUrl') != "" && localStorage.getItem('myNickname')) {
  displayInfo()
  switchPanels()
  formBox.querySelector('.name').value  = localStorage.getItem('myNickname')
  formBox.querySelector('.avatar').value  = localStorage.getItem('myUrl')
}

// Event click on the playing button
formBox.querySelector('button').addEventListener('click', function() {
  if(formBox.querySelector('.name').value != "" && formBox.querySelector('.name').value != ""){
    getInfo()
    displayInfo()
    switchPanels()
  }
})

// Event click for profile editing
profileBox.querySelector('.fa-gear').addEventListener('click', function() {
  switchPanels()
})