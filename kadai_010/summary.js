$(function () {

  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function(){
    // id属性がtargetの要素の文字内容を変える
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function(){
    // id属性がtargetの要素を2秒でフェードアウトする
    $('#target').fadeOut(2000);
  });

  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function(){
    // id属性がtargetの要素を2秒でフェードインする
    $('#target').fadeIn(2000);
  });

});
