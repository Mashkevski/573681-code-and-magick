'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomArrayElement = function (array) {
    var randomIndex = Math.round(Math.random() * (array.length - 1));
    return array[randomIndex];
};

var renderRandomWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
    .textContent = getRandomArrayElement(firstNames) + ' ' + getRandomArrayElement(lastNames);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomArrayElement(coatColors);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomArrayElement(eyesColors);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderRandomWizard());
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballInput = fireballWrap.querySelector('input');
var wizardCoatInput = document.querySelector('.setup-wizard-appearance input[name=coat-color]');
var wizardEyesInput = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');

wizardCoat.addEventListener('click', function () {
  var coatColor = getRandomArrayElement(coatColors);
  wizardCoat.style.fill = coatColor;
  wizardCoatInput.value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = getRandomArrayElement(eyesColors);
  wizardEyes.style.fill = eyesColor;
  wizardEyesInput.value = eyesColor;
});

fireballWrap.addEventListener('click', function () {
  var fireballColor = getRandomArrayElement(fireballColors);
  fireballWrap.style.backgroundColor = fireballColor;
  fireballInput.value = fireballColor;
});
