# 建好環境，來個Hello World
在文章開始之前，還是建議大家先學習基礎的Html, css, Js，較基礎部分不會再多做說明

我這邊所使用的編輯器是VScode，首先先新增一個.html，然後輸入!按下tab，創建基本的檔案吧

建議安裝Live Server插件，可以即時觀看修改好的網頁


然後請在`<head>`的部分加入，就成功引入開發Vue所需的檔案囉

`<script src=”https://unpkg.com/vue@3/dist/vue.global.js"></script>`

然後把程式碼修改成像是這樣

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <title>Document</title>
  </head>
  <body>
    <div id="app">{{ message }}</div>
  </body>

  <script>
    const { createApp } = Vue;

    createApp({
      data() {
        return {
          message: "Hello Vue!",
        };
      },
    }).mount("#app");
  </script>
</html>
```
### 先來看看script
![](https://i.imgur.com/4XR7IrI.png)

首先Vue他export了一個用來創建Vue應用的createApp，而creatApp中間要傳入一個Object，這個括號裡面就是我們主要撰寫的範圍，在option api中，他有規定很多不同的區塊，以這個範例來說，就是data，在vue中你要用到的變數，就是定義在data裡面，在此他定義了一個叫做message的變數，初始值是"hello vue”，你也可以在逗號後面新增更多的變數


例如我新增了一個叫isError的boolean
.mount就是告訴他該生成(作用)在哪裡，這裡則是說明了他會把Vue掛載在id=app上面

### Body部分
首先你一定要定義一個地方去給Vue渲染，我上面的範例是建了一個div裡面設id="app”，並在.mount告訴他要生成在這個div裡面，所以你在div外寫的東西基本上跟Vue無關，我們基本上是會都把所有html寫在這個div裡面的。

	
在這個div內，你馬上就會發現一個特殊的語法
![](https://i.imgur.com/kZmXhHX.png)


在html中，我們會使用{{變數名稱}}，去取出那個變數的值，這個變數一定是要在script中data return過的，你也可以嘗試更改下方的message的值，畫面就會跟著修改，他幫忙我們綁訂了資料與畫面，不必再手動新增了。

### Vue.js devtools
先來介紹一個很實用的開發工具

可以在你的瀏覽器下載這個插件
	[https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

按下F12，切到Vue的部分
![](https://i.imgur.com/vT7srHq.png)


可以看到右方有我剛剛設定的data，也可以用這個工具改右邊變數的值看看喔~