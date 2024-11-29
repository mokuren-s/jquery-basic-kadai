$(function() {
  // class属性のbtnの要素がクリックされたら
  $('.btn').on('click', function(){
    // class属性のtext-boxの要素の値を変更する
    $('.text-box').val('クリックしました！');
  });
});
