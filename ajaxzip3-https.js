/* ================================================================ *
    ajaxzip3.js ---- AjaxZip3 郵便番号→住所変換ライブラリ

    Copyright (c) 2008 Ninkigumi Co.,Ltd.
    http://code.google.com/p/ajaxzip3/

    Copyright (c) 2006-2007 Kawasaki Yusuke <u-suke [at] kawa.net>
    http://www.kawa.net/works/ajax/AjaxZip2/AjaxZip2.html

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
* ================================================================ */

AjaxZip3=function(){};AjaxZip3.VERSION="0.4";AjaxZip3.JSONDATA="https://ajaxzip3.googlecode.com/svn/trunk/ajaxzip3/zipdata";AjaxZip3.CACHE=[];AjaxZip3.prev="";AjaxZip3.nzip="";AjaxZip3.fzip1="";AjaxZip3.fzip2="";AjaxZip3.fpref="";AjaxZip3.addr="";AjaxZip3.fstrt="";AjaxZip3.farea="";AjaxZip3.PREFMAP=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];AjaxZip3.zip2addr=function(h,g,k,b,a,l){AjaxZip3.fzip1=AjaxZip3.getElementByName(h);AjaxZip3.fzip2=AjaxZip3.getElementByName(g,AjaxZip3.fzip1);AjaxZip3.fpref=AjaxZip3.getElementByName(k,AjaxZip3.fzip1);AjaxZip3.faddr=AjaxZip3.getElementByName(b,AjaxZip3.fzip1);AjaxZip3.fstrt=AjaxZip3.getElementByName(a,AjaxZip3.fzip1);AjaxZip3.farea=AjaxZip3.getElementByName(l,AjaxZip3.fzip1);if(!AjaxZip3.fzip1){return}if(!AjaxZip3.fpref){return}if(!AjaxZip3.faddr){return}var c=AjaxZip3.fzip1.value;if(AjaxZip3.fzip2&&AjaxZip3.fzip2.value){c+=AjaxZip3.fzip2.value}if(!c){return}AjaxZip3.nzip="";for(var f=0;f<c.length;f++){var d=c.charCodeAt(f);if(d<48){continue}if(d>57){continue}AjaxZip3.nzip+=c.charAt(f)}if(AjaxZip3.nzip.length<7){return}var j=function(){var i=AjaxZip3.nzip+AjaxZip3.fzip1.name+AjaxZip3.fpref.name+AjaxZip3.faddr.name;if(AjaxZip3.fzip1.form){i+=AjaxZip3.fzip1.form.id+AjaxZip3.fzip1.form.name+AjaxZip3.fzip1.form.action}if(AjaxZip3.fzip2){i+=AjaxZip3.fzip2.name}if(AjaxZip3.fstrt){i+=AjaxZip3.fstrt.name}if(i==AjaxZip3.prev){return}AjaxZip3.prev=i};var m=AjaxZip3.nzip.substr(0,3);var e=AjaxZip3.CACHE[m];if(e){return AjaxZip3.callback(e)}AjaxZip3.zipjsonpquery()};AjaxZip3.callback=function(g){var l=g[AjaxZip3.nzip];var d=(AjaxZip3.nzip-0+4278190080)+"";if(!l&&g[d]){l=g[d]}if(!l){return}var b=l[0];if(!b){return}var n=AjaxZip3.PREFMAP[b];if(!n){return}var c=l[1];if(!c){c=""}var q=l[2];if(!q){q=""}var e=l[3];if(!e){e=""}var p=AjaxZip3.faddr;var j=c;if(AjaxZip3.fpref.type=="select-one"||AjaxZip3.fpref.type=="select-multiple"){var a=AjaxZip3.fpref.options;for(var f=0;f<a.length;f++){var m=a[f].value;var o=a[f].text;a[f].selected=(m==b||m==n||o==n)}}else{if(AjaxZip3.fpref.name==AjaxZip3.faddr.name){j=n+j}else{AjaxZip3.fpref.value=n}}if(AjaxZip3.farea){p=AjaxZip3.farea;AjaxZip3.farea.value=q}else{j+=q}if(AjaxZip3.fstrt){p=AjaxZip3.fstrt;if(AjaxZip3.faddr.name==AjaxZip3.fstrt.name){j=j+e}else{if(e){AjaxZip3.fstrt.value=e}}}AjaxZip3.faddr.value=j;if(!p){return}if(!p.value){return}var k=p.value.length;p.focus();if(p.createTextRange){var h=p.createTextRange();h.move("character",k);h.select()}else{if(p.setSelectionRange){p.setSelectionRange(k,k)}}};AjaxZip3.getResponseText=function(b){var c=b.responseText;if(navigator.appVersion.indexOf("KHTML")>-1){var a=escape(c);if(a.indexOf("%u")<0&&a.indexOf("%")>-1){c=decodeURIComponent(a)}}return c};AjaxZip3.getElementByName=function(d,b){if(typeof(d)=="string"){var e=document.getElementsByName(d);if(!e){return null}if(e.length>1&&b&&b.form){var c=b.form.elements;for(var a=0;a<c.length;a++){if(c[a].name==d){return c[a]}}}else{return e[0]}}return d};AjaxZip3.zipjsonpquery=function(){var a=AjaxZip3.JSONDATA+"/zip-"+AjaxZip3.nzip.substr(0,3)+".js";var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("src",a);b.setAttribute("charset","UTF-8");document.getElementsByTagName("head").item(0).appendChild(b)};function zipdata(a){AjaxZip3.callback(a)};