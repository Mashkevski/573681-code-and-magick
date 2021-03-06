'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 15;
var FONT_GAP = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_TEXT_WIDTH = BAR_WIDTH + BAR_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP * 3 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + (GAP + FONT_GAP) * 3 + BAR_HEIGHT + GAP, MAX_TEXT_WIDTH);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 3 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP * 4 + FONT_GAP * 2 + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime, MAX_TEXT_WIDTH);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(225,' + Math.floor(Math.random() * 80 + 20) + '%,40%)';
    }
    ctx.fillRect(CLOUD_X + GAP * 3 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + (GAP + FONT_GAP) * 3 + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};
