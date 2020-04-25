# home

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 封装基础组件时将一个vue拆分成了布局，逻辑，样式三部分，再index.vue中重新组装
优点：避免因逻辑冗杂导致可读性低下。 缺点：各文件反复切换（分屏开发可弥补）