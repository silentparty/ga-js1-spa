'use strict'

// TODO Render sidebar items from firebase data
// TODO render detail view when sidebar item clicked
// TODO clicking 'add' button invokes empty detail view
// TODO add a 'delete' button to the detail template
// TODO when a user clicks delete button, the data is deleted from firbase, and the user is left with the default view

// TODO Re-enable me at the end (private data)
// ;(function () {
var container = document.querySelector('#container')
var sidebar = document.querySelector('.user-list')

var state = {
  users: []
}

var newUser = {
  name: {
    first: 'value',
    last: 'value'
  }
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
  db.ref().once('value').then(function (snapshot) {
    return snapshot.val()
  }).then((snapshot) => {
    console.log(snapshot)
    Object.keys(snapshot.users).forEach(function(key, index) {
      state.users.push(snapshot.users[key])
      console.log(index)
    })
    renderUserList(state, sidebar)
    console.log(state)
  })
    .catch((err) => {
      console.error('there was a problem initialising the database', err)})
})()

// TODO Use form to get all input?
function grabInput () {
  newUser.name.first = document.querySelector('#first-name').value
  newUser.name.last = document.querySelector('#last-name').value
  newUser.phone = document.querySelector('#phone-mobile').value
  newUser.about = document.querySelector('#about').value
  newUser.address = document.querySelector('#address').value
  newUser.birthday = document.querySelector('#date-birthday').value
  newUser.company = document.querySelector('#company').value
  newUser.favouriteFruit = document.querySelector('#fruit').value
}

function addUser () {
  grabInput()
  db.ref('users/').push(newUser)
}

delegate('body', 'click', '#btn-save', function (event) {
  console.log('you clicked', event.delegateTarget, 'and')
  addUser()
  // TODO use a promise! once it resolves, update the sidebar and refresh the display
  // TODO Make names (at the very least) a required field
})

delegate('body', 'click', '.mdl-list__item', function (event) {
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
  // console.log(data.users)
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
  componentHandler.upgradeDom()
}

render(state, container)

function render (data, into) {
  // TODO
}
// })()
