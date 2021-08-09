//ドロワー
jQuery('.drawer-icon').on('click', function(e) {//ハンバーガーがクリックされた時、どういった動きをするか
    e.preventDefault();//aタグとかボタンとかブラウザに依存する操作を無効化する、クリックイベントの時にはセットで覚えておく
   
    jQuery('.drawer-icon').toggleClass('is-active');//クリックした時にis-activeがついていたら外して、ついていなかったらつける動き
    jQuery('.drawer-content').toggleClass('is-active');
    
    return false;
});
   
//
//ページ内のリンクとスムーススクロール
//
jQuery('a[href^="#"]').on('click', function(){//先頭がシャープ
  
    var header = jQuery('.header').innerHeight();//上の部分がヘッダーに覆われて被さっている→ヘッダーの位置を取得する
    var id = jQuery(this).attr('href');
  
    var position = 0;//初期値をゼロにしておく
    if(id !='#') {//idに値があった時（＃に値がある場合）に条件を分岐してあげる
     position = jQuery(id).offset().top - header;//取得したヘッダーの高さ分を引いてあげると高さが揃う
    }
  
  
   jQuery('html,body').animate({//アニメイトの条件を書いていく
     scrollTop: position//上からどれくらいの距離をスクロールするか指定する
   },
   300);
  });//スムーススクロール上部からの位置を取得し、その位置に対してスクロールで移動する
  

new WOW().init();//必須
