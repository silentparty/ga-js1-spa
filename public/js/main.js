'use strict'

// TODO Render sidebar items from firebase data
// TODO render detail view when sidebar item clicked
// TODO clicking 'add' button invokes empty detail view
// TODO add a 'delete' button to the detail template
// TODO when a user clicks delete button, the data is deleted from firbase, and the user is left with the default view

// TODO Re-enable me at the end (private data)
// ;(function () {
var container = document.querySelector('#container')
var sidebar = document.querySelector('.demo-list-two')

var state = {
  users: []
}
const config = {
  apiKey: 'AIzaSyBC9k1udNheyFSYuCEkovjfdXxm-De0ROE',
  authDomain: 'mythical-zodiac-138523.firebaseapp.com',
  databaseURL: 'https://mythical-zodiac-138523.firebaseio.com',
  storageBucket: 'mythical-zodiac-138523.appspot.com'
}
//
const fbRootPath = 'users/'

// Firebase Database
firebase.initializeApp(config)

// handy firebase reference
const db = firebase.database()

/*
███████ ██ ██████  ███████ ██████   █████  ███████ ███████
██      ██ ██   ██ ██      ██   ██ ██   ██ ██      ██
█████   ██ ██████  █████   ██████  ███████ ███████ █████
██      ██ ██   ██ ██      ██   ██ ██   ██      ██ ██
██      ██ ██   ██ ███████ ██████  ██   ██ ███████ ███████
*/

;(function () {
  console.log('contacting firebase...')
  firebase.database().ref().once('value').then(function (snapshot) {
    return snapshot.val()
  }).then((snapshot) => {
    // state = snapshot
    // renderUserList(state, sidebar)
    Object.keys(snapshot).forEach(function(key) {
      console.log(key, snapshot[key])
      state.users.push(snapshot[key])
    })
  })
    .catch((err) => {
      console.error('there was a problem initialising the database', err)})
})()

function grabInput () {
  name.first
  name.last
  phone
  about
  address
  age
  comapny
  email
  favouriteFruit
}

delegate('body', 'click', '.mdl-button', function (event) {
  console.log('you clicked', event.delegateTarget)
})

/*
██████  ███████ ███    ██ ██████  ███████ ██████
██   ██ ██      ████   ██ ██   ██ ██      ██   ██
██████  █████   ██ ██  ██ ██   ██ █████   ██████
██   ██ ██      ██  ██ ██ ██   ██ ██      ██   ██
██   ██ ███████ ██   ████ ██████  ███████ ██   ██
*/

// Render the user list
function renderUserList (data, into) {
  console.log('rendering userList')
  console.log(data.users)
  into.innerHTML = `
    ${data.users.map((item, index) => {
    return `
        <li class="mdl-list__item mdl-list__item--one-line" data->
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>${item.name.first} ${item.name.last}</span>
        </li>
        `
  }).join('')}
    `
  componentHandler.upgradeDom()
  console.log('renderUserlist complete', data)
}

function renderUserDetail (data, into) {
  // TODO
}



render(state, container)

function render (data, into) {
  // TODO
}
// })()
