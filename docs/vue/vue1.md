# 1 - Vue有哪些版本和寫法?
因為Vue有分幾種版本和寫法，這系列文章會依照我自己編排的順序都會講到，不用太緊張

但如果有要自己找資料時很容易混亂，所以還是說明一下

## 版本差異 : Vue2 和 Vue3
Vue3是在2020年發布的，如果是現今新的專案基本上都會採用Vue3，雖然有少數舊專案會使用Vue2，但初學者直接學習Vue3即可，像是起專案的方式，還有一些細節會不同，就我的感覺他們大概70%相同，因此讀者在學習時要稍微注意一下語法的差異，

## 寫法差異 : Option API 和 Composition API


| ![](https://i.imgur.com/pFS7MGW.png)| 
| -------- |
| 左上角有個切換按鈕|


大家在看Vue的官方文檔時，可以看到有個切換鈕可以切換Vue的兩種寫法，在Vue2時官方主推Option，在Vue3時主推Composition，但是你也可以Vue3寫Option，Vue2寫Composition，在查閱資料時也要注意他是哪種API，寫法也是略有不同，基本上我的文章兩個都會教，不必太擔心。

`<script setup>`
如果你是寫compostion api，他的起頭又分兩種寫法，可以寫script和script setup，雖說差別沒有到非常大，但還是稍微提醒一下。

## 專案建置方式 : CDN和SFC
前面說到Vue的特性就是好入門，他提供了一種超簡單的方式開啟Vue專案的方式，就是指要引入一段連結在普通的Html檔就可以開始寫了，另外一種就是透過node.js起一個完整的Vue專案，其中有包含.vue的檔案(SFC)。

## 後續文章規劃
在文章的一開始，會使用Vue3 + Option API + CDN，至於為什麼選擇Option而不是Composition，算是以我個人認為前者對於新手學習比較友善，在學完基礎觀念在轉換成Composition就可以了。

