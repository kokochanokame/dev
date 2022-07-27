/**
 * @link https://jsbin.com/qemeban/edit?html,css,js,output
 * @link https://animate.style/
 */
function setWayPoint(targetClass, addClass) {
  $(targetClass).waypoint({
    handler: function(direction) {
      //console.log(direction);
      // 要素が画面中央に来るとここが実行される
      if (direction === 'down') {
        /**
         * 下方向のスクロール
         * イベント発生元の要素に
         * fadeOutUpを削除して
         * fadeInUpアニメーションを付けることで
         * アニメーションを開始
         */
        $(this.element)
            .addClass(addClass);
      }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
  });
}

setWayPoint('.img-slide-up', 'animate__fadeInUp');
setWayPoint('.img-slide-right', 'animate__fadeInRight');
setWayPoint('.img-slide-left', 'animate__fadeInLeft');


//アコーディオン
$(function () {
  // 最初のコンテンツは表示
  $(".accordion-item:first-of-type .accordion-content").css("display", "block");
  // 最初の矢印は開いた時の状態に
  $(".accordion-item:first-of-type .js-accordion-title").addClass("open");
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
  });
});





// フォームの入力値チェック
$('#order__btn').on('click', function(e) {
  const username = $('#username').val();  /* お名前 */
  const userkana = $('#userkana').val();  /* フリガナ */
  const zipCode = $('#zip-code').val();     /* 郵便番号 */
  const prefecture = $('select[name=prefecture]').val();     /* 都道府県 */
  const municipalities = $('#municipalities').val();     /* 市区町村 */
  const tel    = $('#tel').val();     /* 電話番号 */
  const email    = $('#email').val();     /* メールアドレス */
  const password  = $('#password').val();   /* パスワード */
  /**
   * @link jQuery ラジオボタンの値を取得/設定するサンプル https://itsakura.com/jquery-radiobutton
   * @type {*|string|jQuery}
   */
  const payMethod  = $('input[name=pay]:checked').val();   /* 支払い方法 */

  console.dir(payMethod);
  e.preventDefault();

  let error_text = '';    /* エラーの説明が入る変数 */

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  }
  else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  }
  else if (!userkana.match(/^[ァ-ヴ　]+$/)) {
    error_text = 'フリガナには全角のカタカナとスペースのみを入力してください';
  }
  else if (zipCode.trim() === '') {
    error_text = '郵便番号を入力してください';
  }
  else if (!zipCode.match(/^[0-9]{3}-?[0-9]{4}$/)) {
  //else if (!zipCode.match(/^[0-9]{3}-[0-9]{4}$/)) { // ハイフン有り
    error_text = '郵便番号を正しく入力してください';
  }
  else if (prefecture.trim() === '') {
    error_text = '都道府県を選択してください';
  }
  else if (municipalities.trim() === '') {
    error_text = '市区町村を入力してください';
  }
  /**
   * @link 全角文字のみの正規表現と半角文字のみの正規表現 https://oboe2uran.hatenablog.com/entry/2020/07/14/223641
   */
  else if (!municipalities.match(/^[^ -~｡-ﾟ]+$/)) {
    error_text = '全角で入力してください';
  }
  else if (tel.trim() === '') {
    error_text = '電話番号を入力してください';
  }
  else if (!tel.match(/^0[0-9]{1,4}-[0-9]{1,4}-[0-9]{4}$/)) {
    error_text = '電話番号を正しい書式で入力してください';
  }
  else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  }
  else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }
  else if (password.trim() === '') {
    error_text = 'パスワードを入力してください';
  }
  else if (!password.match(/^[a-zA-Z0-9]{4,}$/)) {
    error_text = 'パスワードを正しい書式で入力してください';
  }
  else if (!payMethod) {
    error_text = 'お支払い方法を選択してください';
  }

  // エラー内容を表示する
  $('.order-result__error').text(error_text);

  if (error_text) {
    e.preventDefault();
  }
  // エラーがなければ送信する
  if (error_text === '') {
    //$('#contact_form').submit();
  }
});