$(function() {
  var $win = $(window),
      $cloneNav = $('nav').clone().addClass('clone-nav').appendTo('body'),
      showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 1000 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });

   // 任意のズレ高さピクセル数を入力
	var headerHight = 100;
   // #で始まるアンカーをクリックした場合に処理
   jQuery('a[href^="#"]').click(function() {
	  // スクロールの速度
	  var speed = 450; // ミリ秒
	  // アンカーの値取得
	  var href= jQuery(this).attr("href");
	  // 移動先を取得
	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
	  // 移動先を数値で取得
	  var position = target.offset().top-headerHight; // ※　-headerHightでズレの処理
	  // スムーズスクロール
	  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
   });
});

//トップに戻るボタン
$(function() {
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが50に達したらボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

//アコーディオンパネル
$(function() {
  //最初は全てのパネルを非表示に
  $('#panel > dd').hide();
  $('#panel > dt')
    .click(function(e){
 //選択したパネルを開く
      $('+dd', this).slideToggle(500);
    })
});
//ポップアップ
function winCenter(){
  var w = ( screen.width-500 ) / 2;
  var h = ( screen.height-650 ) / 2;
  window.open("form.html","","width=500,height=650"
              +",left="+w+",top="+h);
}
