#  Switch 开关

### 介绍

Used to turn options on or off.

### 安装

``` javascript
import { createApp } from 'vue';
import { Switch } from '@nutui/nutui';

const app = createApp();
app.use(Switch);

```


### 基础用法
:::demo
``` html
<template>
  <nut-switch v-model="checked" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

### 禁用状态
:::demo
``` html
<template>
  <nut-switch v-model="checked" disable />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

### 加载状态
:::demo
``` html
<template>
  <nut-switch v-model="checked" loading />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

### change事件
:::demo
``` html
<template>
  <nut-switch v-model="checked" @change="change" />
</template>
<script lang="ts">
  import { ref, getCurrentInstance } from 'vue';
  export default {
    setup() {
      let { proxy } = getCurrentInstance() as any;
      const checked = ref(true);
      const change = (value: boolean, event: Event) => {
        proxy.$toast.text(`value：${value}`);
      };
      return {
        checked,
        change
      };
    }
  };
</script>
```
:::
### 异步控制
:::demo
``` html
<template>
  <nut-switch :model-value="checkedAsync" @change="changeAsync" />
</template>
<script lang="ts">
  import { ref, getCurrentInstance } from 'vue';
  export default {
    setup() {
      let { proxy } = getCurrentInstance() as any;
      const checkedAsync = ref(true);
      const changeAsync = (value: boolean, event: Event) => {
        proxy.$toast.text(`after 2 second： ${value}`);
        setTimeout(() => {
          checkedAsync.value = value;
        }, 2000);
      };
      
      return {
        checkedAsync,
        changeAsync
      };
    }
  };
</script>
```
:::
### 自定义颜色
:::demo
``` html
<template>
  <nut-switch v-model="checked" active-color="blue" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::
### 支持文字
:::demo
``` html
<template>
  <nut-switch v-model="checked" active-text="Open" inactive-text="Closed" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(true);
      return { checked };
    }
  };
</script>
```
:::

## API

### Props

| Attribute           | Description      | Type    | Default        |
|----------------|------------------|---------|-----------------------|
| v-model        | Status of Switch       | Boolean ｜ String ｜ Number | `false`  |
| disable        | Disable status         | Boolean | `false`               |
| loading        | Loading status         | Boolean | `false`               |
| active-color   | Background color when active | String  | `#fa2c19`    |
| inactive-color | Background color when inactive | String  | `#ebebeb` | 
| active-text    | Word description when active   | String  | -         |
| inactive-text  | Word description when inactive   | String  | -        |
| active-value   | Value when active   | Boolean ｜ String ｜ Number  | `true`  |
| inactive-value | Value when inactive   | Boolean ｜ String ｜ Number  | `false`  |

### Slots

|Name|Description|
|-|-|
|icon| loading icon slot |

### Events

| Event | Description    | Arguments                 |
|--------|----------------|-------------------------------|
| change | Emitted when check status changed | (value: boolean,event: Event) |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-switch-close-bg-color|  _#ebebeb_ | - |
| --nut-switch-close-cline-bg-color|  _#f0f0f0_ | - |
| --nut-switch-width|  _36px_ | - |
| --nut-switch-height|  _21px_ | - |
| --nut-switch-line-height|  _21px_ | - |
| --nut-switch-border-radius|  _21px_ | - |
| --nut-switch-inside-width|  _13px_ | - |
| --nut-switch-inside-height|  _13px_ | - |
| --nut-switch-inside-open-transform|  _translateX(146%)_ | - |
| --nut-switch-inside-close-transform|  _translateX(30%)_ | - |
    