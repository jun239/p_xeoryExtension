// id="body"要素の一番上の位置を取得
const bodyTop = $('body').offset().top;

// スクロールをトリガーに処理を開始
$(window).scroll(function () {
  // トップからのスクロール量を取得
  let scroll = $(this).scrollTop();

  if (scroll >= bodyTop) {
    // id="body"要素より下にきたらアイコンを表示
    $('#pagetop').attr({
      style: 'visibility: visible; opacity: 1;'
    });
  } else {
    // id="body"要素より上にきたらアイコンを非表示
    $('#pagetop').attr({
      style: 'visibility: hidden; opacity: 0;'
    });
  }
});

// ページのトップに移動
$("#pagetop").click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
});