# Vue 方法(method)與事件(event)

前篇文章我們介紹了負責管理資料的data()區塊
在今天的範例中，我先建立了一個`count`的變數

```javascript
 createApp({
    data() {
      return {
        count: 0,
      };
    },
  }).mount("#app");
```

### methods
在此我們要介紹的是`methods`，其實他基本上就是我們在寫JS中的function，我們通常會把邏輯寫在裡面，需要的時候呼叫他

```javascript
createApp({
  data() {
	return {
	  count: 0,
	};
  },
  methods: {
	addOne() {
	  this.count = this.count + 1;
	}
  },
}).mount("#app");

```

在Vue裡面，我們會透過methods的關鍵字，裡面可以撰寫我們要的很多個method，例如我這裡建立了一個名子叫做addOne()的，它的功能就是把count加一。

這裡要注意的是，在method裡若要使用data裡的變數，要加上`this.`才可以取到，直接寫count是不行的

:::tip
若你的Methods裡有兩個method，你想要一個去呼叫另一個，同樣也得加上`this.`
:::
---

### Event
上面講了Methods，但是在僅僅寫在Methods裡面是不會執行的，他需要有事情去觸發他，又或是我們規定他在網頁創建的時候執行(日後會講到)，因此必須說到event

而所謂的事件在網頁中非常重要，我們會希望它點擊後發生某些事情，又或是拖曳去上傳檔案等等等非常多，那Vue如何處理這方面的需求呢?

現在回到HTML的部分
```html
<div id="app">
  <p> {{ count }} </p>
  <button type="button" v-on:click="addOne">點我加一</button>
</div>
```
![](https://i.imgur.com/rgcHLL8.png)

首先可以看到`<p>`的部分，這個我們上周說過，他會顯示count的值(在html裡不用加`this.`喔)

button的部分就是重點了
`v-on:click="addOne"`
v-on:是vue的特殊語法，它代表了我希望在click之後，執行addOne這個method

不過其實它裡面可以放的是JS運算式，也就是也可以寫成
`<button type="button" v-on:click="count += 1">點我加一</button>`

不過建議只要邏輯稍微複雜一點，都寫成method，這樣才可以重複使用，增加可讀性

#### 簡寫
`v-on:`也可以簡寫成`@`
大概像這樣，跟上面也是一樣的效果
```html
<button type="button" @click="addOne()">點我加一</button>
```




