# Rate

### Intro

Use for quick rating actions, or to showcase reviews.

### Install

``` javascript
import { createApp } from 'vue';
import { Rate } from '@nutui/nutui';
const app = createApp();
app.use(Rate);
```

### Basic Usage

:::demo
```html
<template>
    <nut-rate v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### Half Star

:::demo
```html
<template>
    <nut-rate allow-half v-model="value"></nut-rate>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3.5);
        return { value }
    }
}
</script>
```
:::

### Custom icon

:::demo
```html
<template>
    <nut-rate :icon="HeartFill" v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { HeartFill } from '@nutui/icons-vue';
export default {
    components: { HeartFill },
    setup() {
        const value = ref(3);
        return { value, HeartFill }
    }
}
</script>
```
:::

### Custom quantity

:::demo
```html
<template>
    <nut-rate :count="6" v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### disabled state

:::demo
```html
<template>
    <nut-rate disabled v-model="value" />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::

### read-only status

:::demo
```html
<template>
    <nut-rate v-model="value" readonly />
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::
### bind event

:::demo
```html
<template>
    <nut-rate v-model="value" @change="onChange" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
    setup() {
        const value = ref(3);
        const onChange = (val)=>{
            Toast.text(val);
        }
    return { value,onChange }
    }
}
</script>
```
:::



## API
### Props

| Attribute    | Description                                                                      | Type    | Default |
|--------------|----------------------------------------------------------------------------------|---------|---------|
| v-model      | The current number of stars, you can use v-model to bind data in both directions | number  | -       |
| count        | Total number of stars                                                            | number  | 5       |
| active-color | Icon selection color                                                             | string  | #fa200c |
| void-color   | Icon unselected color                                                            | string  | #ccc    |
| allow-half   | half star                                                                        | boolean | false   |
| readonly     | read-only                                                                        | boolean | false   |
| disabled     | whether to disable                                                               | boolean | false   |
| spacing      | spacing                                                                          | number  | 20      |
| touchable    | Whether to allow select rate by touch gesture                                    | boolean | true    |


### Events
| Event  | Description                                                | Arguments |
|--------|------------------------------------------------------------|-----------|
| change | An event that fires whenever the current score is modified | val       |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name                       | Default Value              |
|----------------------------|----------------------------|
| --nut-rate-icon-color      | _var(--nut-primary-color)_ |
| --nut-rate-icon-void-color | _var(--nut-disable-color)_ |