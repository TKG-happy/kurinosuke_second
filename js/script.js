$(function() {
  'use strict';

  // SP画面用のメニューの表示切り替え
  $('#sp-header__menus, #sp-menus').click(function() {
    $('#header, #mv, #sp-menus').toggleClass('js-hide');
  });

  // ページスクロール
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html, href').animate({scrollTop: position}, speed, 'swing');
    $('#header, #mv').removeClass('js-hide');
    $('#sp-menus').addClass('js-hide');
    return false;
  });

  // ページ上部に戻るボタンの色変更
  $(window).scroll(function() {
    var btnTop = $('#to-pageTop').offset().top;
    var btnSize = 60;
    var footerTop = $('#footer').offset().top;
    var btnColor = btnTop + btnSize < footerTop ? '#333' : '#fff';
    $('#to-pageTop svg').css('color', btnColor);
  });
});