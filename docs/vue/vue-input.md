# Vue 取得input值的三個方法


## 1. v-model
vue原生提供的雙向綁定方法
沒有特殊需求的話這個應該是最快最方便的
但是有時候我們可能不想要雙向綁定，只是想單純取到上面的值


```
<script setup>
import { ref } from "vue";
let inputValue = ref("");
</script>

<template>
  <input
    id="input1"
    v-model="inputValue"
    type="text"
  >

  {{ inputValue }}
</template>
```

## 2. event
利用事件的方式，如果該input有發生change即發出事件，我們在從事件中抓取要的資料

```
<script setup>
import { ref } from "vue";
let inputValue = ref("");

function updateValue(event) {
	inputValue.value = event.target.value;
}
</script>

<template>
  <input
    id="input1"
    type="text"
    @change="updateValue"
  >

  {{ inputValue }}
</template>

```

## 3. template ref 
也可以直接抓取DOM上的資料，取得input的值
在vue3中叫做template ref
先定義一個null的ref
在想要綁定的元素上寫`ref=""`
之後即可抓取其DOM資訊
很多時候我們不要他輸入時就改變變數
而是希望按下按鈕後再改動
此時就可以使用這個方法


```
<script setup>
import { ref } from "vue";
let inputValue = ref("");
let inputRef = ref(null);

function updateValue() {
	inputValue.value = inputRef.value.value;
}
</script>

<template>
  <input
    id="input1"
    ref="inputRef"
    type="text"
  >

  <button
    id="button"
    @click="updateValue()"
  >
    update value
  </button>
  
  {{ inputValue }}
</template>
```

