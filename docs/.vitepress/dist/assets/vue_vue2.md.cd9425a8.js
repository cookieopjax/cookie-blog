import{_ as s,c as a,o as n,a as l}from"./app.7b5be229.js";const C=JSON.parse('{"title":"\u5EFA\u597D\u74B0\u5883\uFF0C\u4F86\u500BHello World","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5148\u4F86\u770B\u770Bscript","slug":"\u5148\u4F86\u770B\u770Bscript","link":"#\u5148\u4F86\u770B\u770Bscript","children":[]},{"level":3,"title":"Body\u90E8\u5206","slug":"body\u90E8\u5206","link":"#body\u90E8\u5206","children":[]},{"level":3,"title":"Vue.js devtools","slug":"vue-js-devtools","link":"#vue-js-devtools","children":[]}],"relativePath":"vue/vue2.md"}'),p={name:"vue/vue2.md"},o=l(`<h1 id="\u5EFA\u597D\u74B0\u5883\uFF0C\u4F86\u500Bhello-world" tabindex="-1">\u5EFA\u597D\u74B0\u5883\uFF0C\u4F86\u500BHello World <a class="header-anchor" href="#\u5EFA\u597D\u74B0\u5883\uFF0C\u4F86\u500Bhello-world" aria-hidden="true">#</a></h1><p>\u5728\u6587\u7AE0\u958B\u59CB\u4E4B\u524D\uFF0C\u9084\u662F\u5EFA\u8B70\u5927\u5BB6\u5148\u5B78\u7FD2\u57FA\u790E\u7684Html, css, Js\uFF0C\u8F03\u57FA\u790E\u90E8\u5206\u4E0D\u6703\u518D\u591A\u505A\u8AAA\u660E</p><p>\u6211\u9019\u908A\u6240\u4F7F\u7528\u7684\u7DE8\u8F2F\u5668\u662FVScode\uFF0C\u9996\u5148\u5148\u65B0\u589E\u4E00\u500B.html\uFF0C\u7136\u5F8C\u8F38\u5165!\u6309\u4E0Btab\uFF0C\u5275\u5EFA\u57FA\u672C\u7684\u6A94\u6848\u5427</p><p>\u5EFA\u8B70\u5B89\u88DDLive Server\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5373\u6642\u89C0\u770B\u4FEE\u6539\u597D\u7684\u7DB2\u9801</p><p>\u7136\u5F8C\u8ACB\u5728<code>&lt;head&gt;</code>\u7684\u90E8\u5206\u52A0\u5165\uFF0C\u5C31\u6210\u529F\u5F15\u5165\u958B\u767CVue\u6240\u9700\u7684\u6A94\u6848\u56C9</p><p><code>&lt;script src=\u201Dhttps://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;</code></p><p>\u7136\u5F8C\u628A\u7A0B\u5F0F\u78BC\u4FEE\u6539\u6210\u50CF\u662F\u9019\u6A23</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@3/dist/vue.global.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ message }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> createApp </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Vue!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5148\u4F86\u770B\u770Bscript" tabindex="-1">\u5148\u4F86\u770B\u770Bscript <a class="header-anchor" href="#\u5148\u4F86\u770B\u770Bscript" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> createApp </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Vue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Vue!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        isError</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u9996\u5148Vue\u4ED6export\u4E86\u4E00\u500B\u7528\u4F86\u5275\u5EFAVue\u61C9\u7528\u7684createApp\uFF0C\u800CcreatApp\u4E2D\u9593\u8981\u50B3\u5165\u4E00\u500BObject\uFF0C\u9019\u500B\u62EC\u865F\u88E1\u9762\u5C31\u662F\u6211\u5011\u4E3B\u8981\u64B0\u5BEB\u7684\u7BC4\u570D\uFF0C\u5728option api\u4E2D\uFF0C\u4ED6\u6709\u898F\u5B9A\u5F88\u591A\u4E0D\u540C\u7684\u5340\u584A</p><p>\u4EE5\u9019\u500B\u7BC4\u4F8B\u4F86\u8AAA\uFF0C\u5C31\u662Fdata\uFF0C\u5728vue\u4E2D\u4F60\u8981\u7528\u5230\u7684\u8B8A\u6578\uFF0C\u5C31\u662F\u5B9A\u7FA9\u5728data\u88E1\u9762\uFF0C\u5728\u6B64\u4ED6\u5B9A\u7FA9\u4E86\u4E00\u500B\u53EB\u505Amessage\u7684\u8B8A\u6578\uFF0C\u521D\u59CB\u503C\u662F&quot;Hello vue&quot;\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728\u9017\u865F\u5F8C\u9762\u65B0\u589E\u66F4\u591A\u7684\u8B8A\u6578</p><p>\u4F8B\u5982\u6211\u65B0\u589E\u4E86\u4E00\u500B\u53EB<code>isError</code>\u7684boolean\uFF0C <code>.mount</code>\u5C31\u662F\u544A\u8A34\u4ED6\u8A72\u751F\u6210(\u4F5C\u7528)\u5728\u54EA\u88E1\uFF0C\u9019\u88E1\u5247\u662F\u8AAA\u660E\u4E86\u4ED6\u6703\u628AVue\u639B\u8F09\u5728<code>id=app</code>\u4E0A\u9762</p><h3 id="body\u90E8\u5206" tabindex="-1">Body\u90E8\u5206 <a class="header-anchor" href="#body\u90E8\u5206" aria-hidden="true">#</a></h3><p>\u9996\u5148\u4F60\u4E00\u5B9A\u8981\u5B9A\u7FA9\u4E00\u500B\u5730\u65B9\u53BB\u7D66Vue\u6E32\u67D3\uFF0C\u6211\u4E0A\u9762\u7684\u7BC4\u4F8B\u662F\u5EFA\u4E86\u4E00\u500Bdiv\u88E1\u9762\u8A2Did=&quot;app\u201D\uFF0C\u4E26\u5728.mount\u544A\u8A34\u4ED6\u8981\u751F\u6210\u5728\u9019\u500Bdiv\u88E1\u9762\uFF0C\u6240\u4EE5\u4F60\u5728div\u5916\u5BEB\u7684\u6771\u897F\u57FA\u672C\u4E0A\u8DDFVue\u7121\u95DC\uFF0C\u6211\u5011\u57FA\u672C\u4E0A\u662F\u6703\u90FD\u628A\u6240\u6709html\u5BEB\u5728\u9019\u500Bdiv\u88E1\u9762\u7684\u3002</p><p>\u5728\u9019\u500Bdiv\u5167\uFF0C\u4F60\u99AC\u4E0A\u5C31\u6703\u767C\u73FE\u4E00\u500B\u7279\u6B8A\u7684\u8A9E\u6CD5</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> message </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5728html\u4E2D\uFF0C\u6211\u5011\u6703\u4F7F\u7528\u5169\u500B\u5927\u62EC\u865F\u88E1\u9762\u653E\u8B8A\u6578\u540D\u7A31\uFF0C\u53BB\u53D6\u51FA\u90A3\u500B\u8B8A\u6578\u7684\u503C\uFF0C\u9019\u500B\u8B8A\u6578\u4E00\u5B9A\u662F\u8981\u5728script\u4E2Ddata return\u904E\u7684\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5617\u8A66\u66F4\u6539\u4E0B\u65B9\u7684message\u7684\u503C\uFF0C\u756B\u9762\u5C31\u6703\u8DDF\u8457\u4FEE\u6539\uFF0C\u4ED6\u5E6B\u5FD9\u6211\u5011\u7D81\u8A02\u4E86\u8CC7\u6599\u8207\u756B\u9762\uFF0C\u4E0D\u5FC5\u518D\u624B\u52D5\u65B0\u589E\u4E86\u3002</p><h3 id="vue-js-devtools" tabindex="-1">Vue.js devtools <a class="header-anchor" href="#vue-js-devtools" aria-hidden="true">#</a></h3><p>\u5148\u4F86\u4ECB\u7D39\u4E00\u500B\u5F88\u5BE6\u7528\u7684\u958B\u767C\u5DE5\u5177</p><p>\u53EF\u4EE5\u5728\u4F60\u7684\u700F\u89BD\u5668\u4E0B\u8F09\u9019\u500B\u63D2\u4EF6</p><p><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noreferrer">https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd</a></p><p>\u6309\u4E0BF12\uFF0C\u5207\u5230Vue\u7684\u90E8\u5206</p><p><img src="https://i.imgur.com/vT7srHq.png" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\u53F3\u65B9\u6709\u6211\u525B\u525B\u8A2D\u5B9A\u7684data\uFF0C\u4E5F\u53EF\u4EE5\u7528\u9019\u500B\u5DE5\u5177\u6539\u53F3\u908A\u8B8A\u6578\u7684\u503C\u770B\u770B\u5594~</p>`,25),e=[o];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{C as __pageData,A as default};
