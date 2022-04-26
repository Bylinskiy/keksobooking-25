function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

function insertZeroBeforeDigit (digit) {
  if (String(digit).length === 1) {
    return '0' + digit
  }
  return digit
};

function generateArray (arr) {
  let newArr = arr.filter((element) => {
    if (getRandomPositiveInteger(0,1)) {
      return element
    }
  })
  return newArr
};

const TITLES = [
  'Хата',
  'Будка твоей собаки',
  'Рандомное жилье',
  'Оченьмногобуквенноежильечтобыпроверитьверстку'
];

const PLACE_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const DISCRIPTIONS = [
  'Хата как хата',
  'Собачья конура построенная из чужих будок',
  'Тут будет очень много текста для проверки все ли у меня хорошо с кодом, поэтому просто смотрим и удивляемся, ведь это почти как Лорем ипсум'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];



const createPlace = () => {
  const generateCoords = () => {
    return {
      lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
      lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
    };
  };

  const COORDS = generateCoords();

  return {
    author: {
      avatar: 'img/avatars/user' + insertZeroBeforeDigit(getRandomPositiveInteger(1, 10)) + '.png'
    },
    offer: {
      title: TITLES[getRandomPositiveInteger(0, TITLES.length - 1)],
      address: COORDS.lat + ', ' + COORDS.lng,
      price: getRandomPositiveInteger(0, 10000),
      type: PLACE_TYPE[getRandomPositiveInteger(0, PLACE_TYPE.length - 1)],
      rooms: getRandomPositiveInteger(0, 105),
      guests: getRandomPositiveInteger(0, 105),
      checkin: TIME[getRandomPositiveInteger(0, TIME.length - 1)],
      checkout: TIME[getRandomPositiveInteger(0, TIME.length - 1)],
      features: generateArray(FEATURES),
      description: DISCRIPTIONS[getRandomPositiveInteger(0, DISCRIPTIONS.length - 1)],
      photos: generateArray(PHOTOS)
    },
    location: {
      lat: COORDS.lat,
      lng: COORDS.lng
    }
  };
};
