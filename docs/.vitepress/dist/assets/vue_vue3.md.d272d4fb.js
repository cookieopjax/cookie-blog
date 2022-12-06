import{_ as s,c as n,o as a,a as o}from"./app.7b5be229.js";const u=JSON.parse('{"title":"Vue \u65B9\u6CD5(method)\u8207\u4E8B\u4EF6(event)","description":"","frontmatter":{},"headers":[{"level":3,"title":"methods","slug":"methods","link":"#methods","children":[]},{"level":3,"title":"Event","slug":"event","link":"#event","children":[]}],"relativePath":"vue/vue3.md"}'),p={name:"vue/vue3.md"},l=o(`<h1 id="vue-\u65B9\u6CD5-method-\u8207\u4E8B\u4EF6-event" tabindex="-1">Vue \u65B9\u6CD5(method)\u8207\u4E8B\u4EF6(event) <a class="header-anchor" href="#vue-\u65B9\u6CD5-method-\u8207\u4E8B\u4EF6-event" aria-hidden="true">#</a></h1><p>\u524D\u7BC7\u6587\u7AE0\u6211\u5011\u4ECB\u7D39\u4E86\u8CA0\u8CAC\u7BA1\u7406\u8CC7\u6599\u7684data()\u5340\u584A \u5728\u4ECA\u5929\u7684\u7BC4\u4F8B\u4E2D\uFF0C\u6211\u5148\u5EFA\u7ACB\u4E86\u4E00\u500B<code>count</code>\u7684\u8B8A\u6578</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="methods" tabindex="-1">methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><p>\u5728\u6B64\u6211\u5011\u8981\u4ECB\u7D39\u7684\u662F<code>methods</code>\uFF0C\u5176\u5BE6\u4ED6\u57FA\u672C\u4E0A\u5C31\u662F\u6211\u5011\u5728\u5BEBJS\u4E2D\u7684function\uFF0C\u6211\u5011\u901A\u5E38\u6703\u628A\u908F\u8F2F\u5BEB\u5728\u88E1\u9762\uFF0C\u9700\u8981\u7684\u6642\u5019\u547C\u53EB\u4ED6</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	  count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">addOne</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u5728Vue\u88E1\u9762\uFF0C\u6211\u5011\u6703\u900F\u904Emethods\u7684\u95DC\u9375\u5B57\uFF0C\u88E1\u9762\u53EF\u4EE5\u64B0\u5BEB\u6211\u5011\u8981\u7684\u5F88\u591A\u500Bmethod\uFF0C\u4F8B\u5982\u6211\u9019\u88E1\u5EFA\u7ACB\u4E86\u4E00\u500B\u540D\u5B50\u53EB\u505AaddOne()\u7684\uFF0C\u5B83\u7684\u529F\u80FD\u5C31\u662F\u628Acount\u52A0\u4E00\u3002</p><p>\u9019\u88E1\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728method\u88E1\u82E5\u8981\u4F7F\u7528data\u88E1\u7684\u8B8A\u6578\uFF0C\u8981\u52A0\u4E0A<code>this.</code>\u624D\u53EF\u4EE5\u53D6\u5230\uFF0C\u76F4\u63A5\u5BEBcount\u662F\u4E0D\u884C\u7684</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u82E5\u4F60\u7684Methods\u88E1\u6709\u5169\u500Bmethod\uFF0C\u4F60\u60F3\u8981\u4E00\u500B\u53BB\u547C\u53EB\u53E6\u4E00\u500B\uFF0C\u540C\u6A23\u4E5F\u5F97\u52A0\u4E0A<code>this.</code></p></div><hr><h3 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h3><p>\u4E0A\u9762\u8B1B\u4E86Methods\uFF0C\u4F46\u662F\u5728\u50C5\u50C5\u5BEB\u5728Methods\u88E1\u9762\u662F\u4E0D\u6703\u57F7\u884C\u7684\uFF0C\u4ED6\u9700\u8981\u6709\u4E8B\u60C5\u53BB\u89F8\u767C\u4ED6\uFF0C\u53C8\u6216\u662F\u6211\u5011\u898F\u5B9A\u4ED6\u5728\u7DB2\u9801\u5275\u5EFA\u7684\u6642\u5019\u57F7\u884C(\u65E5\u5F8C\u6703\u8B1B\u5230)\uFF0C\u56E0\u6B64\u5FC5\u9808\u8AAA\u5230event</p><p>\u800C\u6240\u8B02\u7684\u4E8B\u4EF6\u5728\u7DB2\u9801\u4E2D\u975E\u5E38\u91CD\u8981\uFF0C\u6211\u5011\u6703\u5E0C\u671B\u5B83\u9EDE\u64CA\u5F8C\u767C\u751F\u67D0\u4E9B\u4E8B\u60C5\uFF0C\u53C8\u6216\u662F\u62D6\u66F3\u53BB\u4E0A\u50B3\u6A94\u6848\u7B49\u7B49\u7B49\u975E\u5E38\u591A\uFF0C\u90A3Vue\u5982\u4F55\u8655\u7406\u9019\u65B9\u9762\u7684\u9700\u6C42\u5462?</p><p>\u73FE\u5728\u56DE\u5230HTML\u7684\u90E8\u5206</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> {{ count }} </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-on:click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">addOne</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9EDE\u6211\u52A0\u4E00</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><img src="https://i.imgur.com/rgcHLL8.png" alt=""></p><p>\u9996\u5148\u53EF\u4EE5\u770B\u5230<code>&lt;p&gt;</code>\u7684\u90E8\u5206\uFF0C\u9019\u500B\u6211\u5011\u4E0A\u5468\u8AAA\u904E\uFF0C\u4ED6\u6703\u986F\u793Acount\u7684\u503C(\u5728html\u88E1\u4E0D\u7528\u52A0<code>this.</code>\u5594)</p><p>button\u7684\u90E8\u5206\u5C31\u662F\u91CD\u9EDE\u4E86 <code>v-on:click=&quot;addOne&quot;</code> v-on:\u662Fvue\u7684\u7279\u6B8A\u8A9E\u6CD5\uFF0C\u5B83\u4EE3\u8868\u4E86\u6211\u5E0C\u671B\u5728click\u4E4B\u5F8C\uFF0C\u57F7\u884CaddOne\u9019\u500Bmethod</p><p>\u4E0D\u904E\u5176\u5BE6\u5B83\u88E1\u9762\u53EF\u4EE5\u653E\u7684\u662FJS\u904B\u7B97\u5F0F\uFF0C\u4E5F\u5C31\u662F\u4E5F\u53EF\u4EE5\u5BEB\u6210 <code>&lt;button type=&quot;button&quot; v-on:click=&quot;count += 1&quot;&gt;\u9EDE\u6211\u52A0\u4E00&lt;/button&gt;</code></p><p>\u4E0D\u904E\u5EFA\u8B70\u53EA\u8981\u908F\u8F2F\u7A0D\u5FAE\u8907\u96DC\u4E00\u9EDE\uFF0C\u90FD\u5BEB\u6210method\uFF0C\u9019\u6A23\u624D\u53EF\u4EE5\u91CD\u8907\u4F7F\u7528\uFF0C\u589E\u52A0\u53EF\u8B80\u6027</p><h4 id="\u7C21\u5BEB" tabindex="-1">\u7C21\u5BEB <a class="header-anchor" href="#\u7C21\u5BEB" aria-hidden="true">#</a></h4><p><code>v-on:</code>\u4E5F\u53EF\u4EE5\u7C21\u5BEB\u6210<code>@</code> \u5927\u6982\u50CF\u9019\u6A23\uFF0C\u8DDF\u4E0A\u9762\u4E5F\u662F\u4E00\u6A23\u7684\u6548\u679C</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">addOne()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9EDE\u6211\u52A0\u4E00</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,23),t=[l];function e(c,r,F,D,y,d){return a(),n("div",null,t)}const C=s(p,[["render",e]]);export{u as __pageData,C as default};
