import{_ as s,c as n,o as a,a as l}from"./app.7b5be229.js";const d=JSON.parse('{"title":"Vue \u53D6\u5F97input\u503C\u7684\u4E09\u500B\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. v-model","slug":"_1-v-model","link":"#_1-v-model","children":[]},{"level":2,"title":"2. event","slug":"_2-event","link":"#_2-event","children":[]},{"level":2,"title":"3. template ref","slug":"_3-template-ref","link":"#_3-template-ref","children":[]}],"relativePath":"vue/vue-input.md"}'),p={name:"vue/vue-input.md"},e=l(`<h1 id="vue-\u53D6\u5F97input\u503C\u7684\u4E09\u500B\u65B9\u6CD5" tabindex="-1">Vue \u53D6\u5F97input\u503C\u7684\u4E09\u500B\u65B9\u6CD5 <a class="header-anchor" href="#vue-\u53D6\u5F97input\u503C\u7684\u4E09\u500B\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="_1-v-model" tabindex="-1">1. v-model <a class="header-anchor" href="#_1-v-model" aria-hidden="true">#</a></h2><p>vue\u539F\u751F\u63D0\u4F9B\u7684\u96D9\u5411\u7D81\u5B9A\u65B9\u6CD5 \u6C92\u6709\u7279\u6B8A\u9700\u6C42\u7684\u8A71\u9019\u500B\u61C9\u8A72\u662F\u6700\u5FEB\u6700\u65B9\u4FBF\u7684 \u4F46\u662F\u6709\u6642\u5019\u6211\u5011\u53EF\u80FD\u4E0D\u60F3\u8981\u96D9\u5411\u7D81\u5B9A\uFF0C\u53EA\u662F\u60F3\u55AE\u7D14\u53D6\u5230\u4E0A\u9762\u7684\u503C</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let inputValue = ref(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">    id=&quot;input1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    v-model=&quot;inputValue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ inputValue }}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-event" tabindex="-1">2. event <a class="header-anchor" href="#_2-event" aria-hidden="true">#</a></h2><p>\u5229\u7528\u4E8B\u4EF6\u7684\u65B9\u5F0F\uFF0C\u5982\u679C\u8A72input\u6709\u767C\u751Fchange\u5373\u767C\u51FA\u4E8B\u4EF6\uFF0C\u6211\u5011\u5728\u5F9E\u4E8B\u4EF6\u4E2D\u6293\u53D6\u8981\u7684\u8CC7\u6599</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let inputValue = ref(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function updateValue(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	inputValue.value = event.target.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">    id=&quot;input1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @change=&quot;updateValue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ inputValue }}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3-template-ref" tabindex="-1">3. template ref <a class="header-anchor" href="#_3-template-ref" aria-hidden="true">#</a></h2><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u6293\u53D6DOM\u4E0A\u7684\u8CC7\u6599\uFF0C\u53D6\u5F97input\u7684\u503C \u5728vue3\u4E2D\u53EB\u505Atemplate ref \u5148\u5B9A\u7FA9\u4E00\u500Bnull\u7684ref \u5728\u60F3\u8981\u7D81\u5B9A\u7684\u5143\u7D20\u4E0A\u5BEB<code>ref=&quot;&quot;</code> \u4E4B\u5F8C\u5373\u53EF\u6293\u53D6\u5176DOM\u8CC7\u8A0A \u5F88\u591A\u6642\u5019\u6211\u5011\u4E0D\u8981\u4ED6\u8F38\u5165\u6642\u5C31\u6539\u8B8A\u8B8A\u6578 \u800C\u662F\u5E0C\u671B\u6309\u4E0B\u6309\u9215\u5F8C\u518D\u6539\u52D5 \u6B64\u6642\u5C31\u53EF\u4EE5\u4F7F\u7528\u9019\u500B\u65B9\u6CD5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">let inputValue = ref(&quot;&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">let inputRef = ref(null);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function updateValue() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	inputValue.value = inputRef.value.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;input</span></span>
<span class="line"><span style="color:#A6ACCD;">    id=&quot;input1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ref=&quot;inputRef&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button</span></span>
<span class="line"><span style="color:#A6ACCD;">    id=&quot;button&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    @click=&quot;updateValue()&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    update value</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ inputValue }}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),t=[e];function o(c,i,r,u,C,A){return a(),n("div",null,t)}const D=s(p,[["render",o]]);export{d as __pageData,D as default};
