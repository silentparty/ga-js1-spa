'use strict'

;(function () {
  var container = document.querySelector('#container')
  var sidebar = document.querySelector('.mdl-layout--fixed-drawer')
  
  var state = {}
  const config = {
    apiKey: 'AIzaSyBC9k1udNheyFSYuCEkovjfdXxm-De0ROE',
    authDomain: 'mythical-zodiac-138523.firebaseapp.com',
    databaseURL: 'https://mythical-zodiac-138523.firebaseio.com',
    storageBucket: 'mythical-zodiac-138523.appspot.com'
  }
  //
  // const fbRootPath = 'users/'

  // Firebase Database
  firebase.initializeApp(config)

  // handy firebase reference
  const db = firebase.database()

  ;(function () {
    console.log('contacting firebase...')
    firebase.database().ref().once('value').then(function (snapshot) {
      state = snapshot.val
      console.log('all done now',snapshot.val())
      // renderUserList(state, sidebar)
    })
  })()

  delegate('body', 'click', '.mdl-button', function (event) {
    console.log('you clicked', event.delegateTarget)
  })

  console.log(getGravatar('lushdays@gmail.com'))

  // grab an email address, grab a gravatar image
  function getGravatar (email, size) {
    var size = size || 80
    return 'http://www.gravatar.com/avatar/' + md5(email) + '.jpg?s=' + size
  }

  // Render the user list
  function renderUserList (into, data) {
    console.log('rendering userList')
  }

  // Render Template for Collection List
  function renderCollectionList (state) {
    console.log('rendering collections')

    if (state.collections !== null) {
      var collections = Object.keys(state.collections).map(function (key) {
        return `
        <div class="mdl-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-shadow--2dp collection-card" data-id="${key}">
          <div class="mdl-card__title mdl-card--expand">
            <h4>${state.collections[key].name}</h4>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <a href="#" class="mdl-button view-collection">View Collection</a>
          </div>
        </div>
        `
      })
    } else {
      var message = `
      <h4>You don't have any collections. Add a collection by pressing the + button.</h4>
      `
    }
  }

  render(state, container)

  function render (data, into) {
    // TODO
  }
})()
