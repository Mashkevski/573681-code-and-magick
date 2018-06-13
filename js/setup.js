'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

var randomArrayElement = function (array) {
  if (array) {
    var randomIndex = Math.round(Math.random() * (array.length - 1));
    return array[randomIndex];
  }
  return null;
};

var renderRandomWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label')
    .textContent = randomArrayElement(firstNames) + ' ' + randomArrayElement(lastNames);
  wizardElement.querySelector('.wizard-coat').style.fill = randomArrayElement(coatColors);
  wizardElement.querySelector('.wizard-eyes').style.fill = randomArrayElement(eyesColors);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderRandomWizard());
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
