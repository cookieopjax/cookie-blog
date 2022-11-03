# [JavaScript] var, let, const差別, Scope, Scope Chain, Closure

## 從Scope說起
Scope 定義了變數的可及與可視範圍

* Global scope (全域變數)
* function scope
* Block scope (在其他語言中的區域變數)
基本上從我寫過的其他語言，如C語言，宣告在最外層就是1，在括號內就是3，而2目前只在JS看過，而在js中最有趣的就是下面的程式碼

```javascript
for(var a = 0; a < 10; a++){}
console.log(a)
```
如果你用其他程式語言的邏輯來看，一定會認為執行結果是a is not defined

但實際的結果是可以印出a = 10

這是因為在JS中，var沒有Block scope

而如果將上面程式碼的var改為let，就會顯示a is not defined了


而這三個都是有function scope的，也就是可以用function切割變數
```javascript
function iamfunction(){
 var  a = 0;
}
console.log(a)
//ReferenceError: a is not defined
```




## Scope Chain
猜猜看這個程式會印出什麼
```javascript
var a = "bang"
function func1(){
  var a = "boozoo"
  func2()
}
function func2(){
  console.log(a)
}
func1()
```
答案是...

`bang`

在跑到func2的時候，他會發現這個function scope裡面是沒有a的，因此他會嘗試往該funciont定義的那層去找，而func2定義在最外層，因此存取到的是最外層的a。

今天連fun2()那層都沒有，他會看看那一層定義的在哪，繼續不斷往上找，直到最最外層為止。

重點在該funciont定義的那層去找，至於是誰呼叫的，那並不重要，這又被稱為static scope。

## Closure
```javascript
function makeFunc() {
  var name = 'Fooish'; // 一個區域變數
  function displayName() {
    console.log(name); //scope chain
  }
  return displayName; // 創建一個 closure
}
var myFunc = makeFunc();
myFunc();// 顯示 Fooish
```
在大部分程式語言，函式內的區域變數，只會在函式的執行期間存在。當 makeFunc() 執行完，你可能會預期 name 變數再也無法使用。但這段能照舊運行的程式碼表明了，在 JavaScript 並不是這樣做，JS就是如此詭異(x。

透過在 function 中回傳另一個 function 的寫法，就可以把 name 這個變數鎖在這個 function 裡面，隨時能夠拿出來使用。

上面例子中，makeFunc() 執行時回傳一個 function，同時自動創建了一個 closure 環境。closure 像是一個特殊的物件 (指定給了 myFunc)，closure 中包含一個函數 (displayName)，以及函數 (makeFunc) 執行當時的環境，讓你在函數返回後還是可以持續存取 closure 保存的環境 (像是能存取 name 變數，name 變數不會因為函數回傳後而被刪除)。

### 透過閉包讓 function 能夠有 private 變數
![](https://miro.medium.com/max/640/1*8AyDSe5wdUaKBU8jRfcoyg.png)
![](https://miro.medium.com/max/268/1*Sm2TBDuowJimHzdUYJyfmg.png)

cat和dog都有count，但卻可以各自獨立

--- 

以下內容取自https://blog.techbridge.cc/2018/12/08/javascript-closure/
用我自己的理解再次詮釋

![](https://miro.medium.com/max/720/1*K53lPQzdsuEC3Dul5HEfOw.png)
在這個例子中，假設頁面上有五個按鈕，我想要第一個按下去時彈出 0，第二個按下去時彈出 1，以此類推，但實際上卻會發生怎麼按都是5

我們來看看執行流程

1. 程式執行，開始跑第一行
2. 開始for，裡面沒執行什麼(沒事件)
3. 此時i = 5

然後你點擊的時候

1. 執行addEventListener，發現沒有i欸乾
2. 只好scope chain往上找
3. 找到5並跳出alert()

那如何解決呢

其實就是直接建5個function，大概像這樣

```javascript
btn[0].addEventListener('click', alert(0))
btn[1].addEventListener('click', alert(1))
btn[2].addEventListener('click', alert(2))
btn[3].addEventListener('click', alert(3))
btn[4].addEventListener('click', alert(4))
```

不過還是建議直接使用let去解決






