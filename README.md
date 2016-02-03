- 新規の設置には [yubinbango](https://github.com/yubinbango/yubinbango)ライブラリの使用をオススメしています。

#ajaxzip3
世界一、簡単に設置できる郵便番号検索を目指して！

▶[ajaxzip3設置サンプルページ](https://ajaxzip3.github.io/sample-page/)◀

###最新のお知らせ

- 新規の設置には [yubinbango](https://github.com/yubinbango/yubinbango)ライブラリの使用をオススメしています。
- Google Codeのサービス廃止によりGithubに移行いたしました。
- Github移行を機にこれまでhttp、httpsで分かれていたURLを一本化いたしました。  
今後は、https://ajaxzip3.github.io/ajaxzip3.js をご利用ください。

###Google Code版からGithub版への移行ガイド
HTML中の

    <script src="http://ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/ajaxzip3.js" charset="UTF-8"></script>

となっている部分を

    <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>

に変更する。  
以上。

##ajaxzip3とは
もう郵便番号データをサーバにインストールする必要はありません。

[株式会社人気組](https://ninkigumi.com)（本社：東京都千代田区、代表取締役：[小林照幸](https://plus.google.com/+小林照幸)）が中心となって [ajaxzip2](http://www.kawa.net/works/ajax/ajaxzip2/ajaxzip2.html) を JSONP に対応させ、ajaxzip3 として新たに公開いたしました。

郵便番号検索と言えば、かつては、Webサイトのフォームで郵便番号を入力した後、検索ボタンを押すことにより住所が表示される形態が一般的でしたが、 最近はAjax技術の浸透により、郵便番号を入力すると自動的に住所が表示されるWebフォームも増えてきました。 ところがこれまで公開されていた郵便番号検索プログラムは、設置するためにサーバ側の設定が必要となるものや、郵便番号データを設置者自身でメンテナンスする必要があるものなど、設置者にとっては手間のかかるものでした。 ajaxzip3は、既存のHTMLにたった2行のコードを追加するだけで誰でも簡単に設置し使用できるライブラリです。プログラミングやサーバの設定は必要ありません。

＃設置するHTMLのcharsetがUTF-8以外の場合にも対応しました。（下記の設定例をご確認ください）

＃郵便番号データのソースは[郵便事業株式会社（旧郵政省）提供のデータ](http://www.post.japanpost.jp/zipcode/download.html)を使用しています。なお、郵便番号データの更新作業自体は1コマンドで完了しますが、エラー発生を考慮し（過去には実際に郵便事業株式会社側でのデータ化ミス等の事例もあります）敢えてcronでの完全自動化は行わず最後のひと手間については手作業にて行っております。

###オリジナルからの変更点

- Javascriptライブラリのprototype.jsやJQueryが不要になりました。
- メンテナンス不要で常に最新版の郵便番号データを利用できるようになりました。（JSONPに対応）
- オリジナルのajaxzip2に付属している郵便番号データをJSONP形式に変換するためのPythonスクリプトを用意しました。
- 読み込み時間の短縮。[YUI Compressor](http://yui.github.io/yuicompressor/)を使用してJavascriptコードを圧縮しました。 12KB→5KB （[参考記事](http://www.julienlecomte.net/blog/2007/08/11/)）
- 引数の順序を変更しました。（詳しくは下記を参照してください）

###利用方法（設定例）
▶[ajaxzip3設置サンプルページ](https://ajaxzip3.github.io/sample-page/)◀

HTMLヘッダ設定例（設置するHTMLのcharsetがUTF-8の場合）

    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>サンプル</title>
    <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
    </head>

HTMLヘッダ設定例（設置するHTMLのcharsetがShift_JISの場合）

    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS">
    <title>サンプル</title>
    <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
    </head>

1ボックスで郵便番号7桁を入力させる場合の設定例（都道府県と以降の住所を分ける場合）

    <input type="text" name="zip01" size="10" maxlength="8" onKeyUp="AjaxZip3.zip2addr(this,'','pref01','addr01');">
    <input type="text" name="pref01" size="20">
    <input type="text" name="addr01" size="60">

1ボックスで郵便番号7桁を入力させる場合の設定例（都道府県と以降の住所を分けない場合）

    <input type="text" name="zip11" size="10" maxlength="8" onKeyUp="AjaxZip3.zip2addr(this,'','addr11','addr11');">
    <input type="text" name="addr11" size="60">

2ボックスで郵便番号を3桁-4桁形式で入力させる場合の設定例

    <input type="text" name="zip21" size="4" maxlength="3"> － <input type="text" name="zip22" size="5" maxlength="4" onKeyUp="AjaxZip3.zip2addr('zip21','zip22','pref21','addr21','strt21');">
    <input type="text" name="pref21" size="40">
    <input type="text" name="addr21" size="40">
    <input type="text" name="strt21" size="40">

###注）ajaxzip2を利用していた方へ

オリジナルから引数の順序を変更しました。

オリジナルの引数は

    AjaxZip2.zip2addr( '〒上3桁', '都道府県', '市区町村', '〒下4桁', '町域大字', '丁目番地' );
でしたが、これを

    AjaxZip3.zip2addr( '〒上3桁', '〒下4桁', '都道府県', '市区町村', '町域大字', '丁目番地' );
としました。

###メディア掲載

・[MOONGIFTさんでご紹介いただきました(2009.3.27)](http://www.moongift.jp/2009/03/ajaxzip3/)

　　
