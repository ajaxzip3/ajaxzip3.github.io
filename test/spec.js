browser.ignoreSynchronization = true;
browser.get(browser.baseUrl+'/ajaxzip3.html');

describe('AjaxZip3.zip2addr', function() {
  describe('郵便番号を3桁-4桁形式で入力される場合', function() {
    it('住所欄をワンボックスにする場合', function() {
      element(by.name('yubin01')).sendKeys(100)
      .then(function(){
        element(by.name('yubin02')).sendKeys(8950)
        .then(function(){
          browser.driver.sleep(1000)
          .then(function(){
            expect(element(by.name('addr01')).getAttribute('value')).
              toEqual('東京都千代田区霞が関'); //東京都千代田区霞が関１丁目２－１
          });
        });
      });
    });

    it('都道府県 と 以降の住所 に分ける場合', function() {
      element(by.name('yubin11')).sendKeys(100)
      .then(function(){
        element(by.name('yubin12')).sendKeys(8950)
        .then(function(){
          browser.driver.sleep(1000)
          .then(function(){
            expect(element(by.name('region11')).getAttribute('value')).
                toEqual('東京都');
            expect(element(by.name('addr11')).getAttribute('value')).
                toEqual('千代田区霞が関');
          });
        });
      });
    });

    it('都道府県 と 市町村区 と 以降の住所に分ける場合', function() {
      element(by.name('yubin21')).sendKeys(100)
      .then(function(){
        element(by.name('yubin22')).sendKeys(8950)
        .then(function(){
          browser.driver.sleep(1000)
          .then(function(){
            expect(element(by.name('region21')).getAttribute('value')).
                toEqual('東京都');
            expect(element(by.name('local21')).getAttribute('value')).
                toEqual('千代田区');
            expect(element(by.name('addr21')).getAttribute('value')).
                toEqual('霞が関');
          });
        });
      });
    });

    it('都道府県 と 市町村区 と 以降の住所に分ける場合', function() {
      element(by.name('yubin31')).sendKeys(100)
      .then(function(){
        element(by.name('yubin32')).sendKeys(8950)
        .then(function(){
          browser.driver.sleep(1000)
          .then(function(){
            expect(element(by.name('region31')).getAttribute('value')).
                toEqual('東京都');
            expect(element(by.name('local31')).getAttribute('value')).
                toEqual('千代田区');
            expect(element(by.name('street31')).getAttribute('value')).
                toEqual('霞が関');
            expect(element(by.name('extended31')).getAttribute('value')).
                toEqual('１丁目２－１');
          });
        });
      });
    });
  });

  describe('ワンボックスで郵便番号7桁を入力させる場合', function() {
    it('住所欄をワンボックスにする場合', function() {
      element(by.name('yubin41')).sendKeys(1008950)
      .then(function(){
        browser.driver.sleep(1000)
        .then(function(){
          expect(element(by.name('addr41')).getAttribute('value')).
            toEqual('東京都千代田区霞が関'); //東京都千代田区霞が関１丁目２－１
        });
      });
    });

    it('都道府県 と 以降の住所 に分ける場合', function() {
      element(by.name('yubin51')).sendKeys(1008950)
      .then(function(){
        browser.driver.sleep(1000)
        .then(function(){
          expect(element(by.name('region51')).getAttribute('value')).
              toEqual('東京都');
          expect(element(by.name('addr51')).getAttribute('value')).
              toEqual('千代田区霞が関');
        });
      });
    });

    it('都道府県 と 市町村区 と 以降の住所に分ける場合', function() {
      element(by.name('yubin61')).sendKeys(1008950)
      .then(function(){
        browser.driver.sleep(1000)
        .then(function(){
          expect(element(by.name('region61')).getAttribute('value')).
              toEqual('東京都');
          expect(element(by.name('local61')).getAttribute('value')).
              toEqual('千代田区');
          expect(element(by.name('addr61')).getAttribute('value')).
              toEqual('霞が関');
        });
      });
    });

    it('都道府県 と 市町村区 と 以降の住所に分ける場合', function() {
      element(by.name('yubin71')).sendKeys(1008950)
      .then(function(){
        browser.driver.sleep(1000)
        .then(function(){
          expect(element(by.name('region71')).getAttribute('value')).
              toEqual('東京都');
          expect(element(by.name('local71')).getAttribute('value')).
              toEqual('千代田区');
          expect(element(by.name('street71')).getAttribute('value')).
              toEqual('霞が関');
          expect(element(by.name('extended71')).getAttribute('value')).
              toEqual('１丁目２－１');
        });
      });
    });
  });
});
