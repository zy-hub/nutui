import{c as t,o as e,C as d}from"./vendor.ed841bd5.js";const n={class:"markdown-body"},o=d('<h1>Datepicker 日期选择器</h1><h3>介绍</h3><p>时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { DatePicker } from &#39;@nutui/nutui@taro&#39;;\n\nconst app = createApp();\napp.use(DatePicker);\n</code></pre><h2>代码演示</h2><pre><code class="language-html">&lt;nut-datepicker @onChange=&quot;onChange&quot;&gt;\n  &lt;nut-cell title=&quot;请选择日期&quot; :desc=&quot;desc&quot;&gt;&lt;/nut-cell&gt;\n&lt;/nut-datepicker&gt;\n</code></pre><pre><code class="language-javascript">&lt;script&gt;\nexport default createDemo({\n  setup() {\n    const desc = ref();\n\n    const onChange = (value: any) =&gt; {\n      desc.value = value;\n    };\n\n    return {\n      desc,\n      onChange\n    };\n  }\n});\n&lt;/script&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选中的日期，格式为’YYYY-MM-DD’</td><td>String</td><td><code>new Date()</code></td></tr><tr><td>start</td><td>开始日期</td><td>String</td><td><code>1970-01-01</code></td></tr><tr><td>end</td><td>结束日期</td><td>String</td><td><code>2999-01-01</code></td></tr><tr><td>fields</td><td>选择器的粒度(<code>year</code>、<code>month</code>、<code>day</code>)</td><td>String</td><td><code>day</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>onChange</td><td>点击确定按钮时触发</td><td>event: Event</td></tr></tbody></table>',13),a={expose:[],setup:d=>(d,a)=>(e(),t("div",n,[o]))};export default a;
