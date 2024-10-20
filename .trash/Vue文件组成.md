## 单组件文件结构
1. `<template> </template>`
这部分定义了HTML模板，通过Vue的模板语法将元素渲染进DOM
2. `<script> </script>`
这部分定是组件的Javascript代码，通过Javascript的模块系统可以将此组件导出
3. `<style scoped> </style>`
这部分定义了组件的样式


## 理解
- 将根组件作为参数传递给应用的构造函数，挂载该应用到DOM元素上，那么从该元素开始，原本的所有子元素将不被渲染，转而渲染组件。

- 组件的本质是对象。在构建过程中，单文件组将中的template、script和style将被转换为对象的属性。对象名就是自定义元素名，对象值就是组件的选项对象。
