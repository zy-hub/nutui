# Layout


### Intro

For quick layout

### Install

```javascript
import { createApp } from 'vue';
import { Layout,Row,Col } from '@nutui/nutui';

const app = createApp();
app.use(Layout);
app.use(Row);
app.use(Col);
```



### Basic Usage

The Layout component provides a 24-column grid, by adding the span attribute on Col to set the percentage of the width of the column. The offset attribute can set the offset width of the column, and the calculation method is the same as span.

:::demo
```html
<template>
  <nut-row>
    <nut-col :span="24">
      <div class="flex-content">span:24</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="12">
      <div class="flex-content">span:12</div>
    </nut-col>
    <nut-col :span="12">
      <div class="flex-content flex-content-light">span:12</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="8">
      <div class="flex-content">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content flex-content-light">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content">span:8</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```
:::

### Set element spacing

:::demo
```html
<template>
  <nut-row :gutter="10">
      <nut-col :span="8">
          <div class="flex-content">span:8</div>
      </nut-col>
      <nut-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
      </nut-col>
      <nut-col :span="8">
          <div class="flex-content">span:8</div>
      </nut-col>
  </nut-row>   
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```
:::

### Flex layout

:::demo
```html
<template>
  <nut-row type="flex" wrap="nowrap">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="center">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="end">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-between">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-around">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-evenly">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```
:::
## API

### Row Props

| Attribute | Description | Type   | Default
|----- | ----- | ----- | ----- 
| type | The optional value is flex | String | -
| gutter | Spacing between column elements（ in PX ） | String、Number | -
| justify | Flex spindle alignment, optional values are start end center space-around space-between space-evenly | String | start
| align | Flex cross axis alignment, optional values are flex-start center flex-end | String | flex-start
| flex-wrap | Whether flex breaks a line. The optional values are nowrap wrap reverse | String | nowrap

### Col Props

| Attribute | Description | Type   | Default
|----- | ----- | ----- | ----- 
| span | Column element width（There are 24 copies in total. For example, if you set 3 in a row, the span value is 8） | String、Number | 24
| offset | Column element offset distance | String、Number | 0

### Row Events

| Attribute | Description | callback
|----- | ----- | ----- 
| click | Triggered when clicked | event: MouseEvent

### Col Events

| Attribute | Description | Callback Arguments
|----- | ----- | ----- 
| click | Triggered when clicked | event: MouseEvent