/**
 * Alert function
 */

const alertFunction = (message, type = 'danger') => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${message}<button data-bs-dismiss="alert" class="btn-close btn-sm"></button></p>`;
};

/**
 * random id generate
 */

const randomId = () => {
  return Math.floor(Math.random() * 10000) + '_' + Date.now();
};

/**
 * read ls data
 */

const readLsData = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false;

  // if (localStorage.getItem(key)) {
  //   // returning data after converting
  //   return JSON.parse(localStorage.getItem(key));
  // } else {
  //   return false;
  // }
};

/**
 * updata ls data
 */

const updataLsData = (key, array) => {
  // returning data after converting
  localStorage.setItem(key, JSON.stringify(array));
};

/**
 * Clock
 */
const clock = () => {
  const display = document.getElementById('time');
  const time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (sec >= 0 && sec <= 9) {
    '0' + sec;
  }

  return (display.innerHTML = `<h4 class=" mt-2 mb-0">${hr}:${min}:${sec}</h4>`);
};

/**
 * value set LS
 */
const createLsData = (key, value) => {
  // init empty data
  let data = [];

  if (localStorage.getItem(key)) {
    // passing value by making array
    data = JSON.parse(localStorage.getItem(key));
  }

  // push data to value and passing data to json stringify
  data.push(value);

  // converting value by json.stringify
  localStorage.setItem(key, JSON.stringify(data));
};
