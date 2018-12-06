console.log('👋 hello from the javascript file.')

/**
 * ajaxCall()
 * Ajax call helper function
 *
 * @param {String} url
 * @param {Function} callback
 */
function ajaxCall(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
};

/**
 * listenToEvent()
 * Catch-all for add event callbacks
 *
 * @param {String} element
 * @param {String} type
 * @param {Function} callback
 */
function listenToEvent(element, type, callback) {
  if (element === null || typeof(element) === 'undefined') return;
  if (element.addEventListener) {
    element.addEventListener(type, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, callback);
  } else {
    element['on' + type] = callback;
  }
}

/**
 * validateString()
 * Check string against specified criteria
 *
 * @param {String} s
 */

function validateString(s) {
  if(s === '') return false;
  if(s.length < 3) return false;
  if(/[^a-z0-9 ]/i.test(s)) return false;
  return true;
}

/**
 * updateUI()
 * Add content to UI
 *
 * @param {String} element
 * @param {String} content
 * @param {String} html
*/

function updateUI(element, content, html) {
  if (html) {
    element.innerHTML = content;
  } else {
    element.innerText = content;
  }
}

/**
 * randomize()
 * Get random item from array
 *
 * @param {Array} array
 */

function randomize(array) {
  return array[Math.floor(Math.random()*array.length)];
}

/**
 * navEmoji()
 * add emoji to url
 */

function navEmoji() {
  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    window.location.hash = '🐝';
  }
};

/**
 * randomEmojis()
 * rotate emojis in footer
 */

var emojis = [
  '☕️',   // coffee
  '&#127863;', // wine
  '&#127850;', // cookie
  '&#128131;', // dancer
  '🐝',  // nail care
  '🎉',  //  tada
  '💯',  //  100
  '🍕',  //  pizza
];

function convertEmoji(emoji) {
  emojione.toImage(emoji);
}

function randomEmojis() {
  var element = document.querySelector('.emoji');
  element.innerHTML = randomize(emojis);
}

setInterval(randomEmojis, 2e3)

navEmoji();
