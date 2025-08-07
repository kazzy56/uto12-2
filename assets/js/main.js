'use strict';

jQuery(function ($) {
  // https://ugokuweb.coco-factory.jp/ugokuweb/move01/4-1-5/
	// ローディング-ロゴアウトラインアニメーション-
	let stroke;
	stroke = new Vivus('mask', {
		start: 'manual',
		type: 'scenario-sync',
		duration: 10,
		forceRender: false,
		animTimingFunction: Vivus.EASE,
	},
	function () {
		$('#mask').attr('class', 'is-done');
	});

	$('#js-loading-logo').delay(3000).fadeOut();
	stroke.play();

	$('#js-loading').delay(3000).fadeOut(800, function () {
		$('body').addClass('is-appear');
	});
});