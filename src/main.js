import Vue from 'vue'
import App from './App.vue'
import router from './router'
import gpu from './gpu.js'
import ram from './ram.js'
import rom from './rom.js'
import cpu from './cpu.js'

Vue.config.productionTip = false

let data = {
  ramCart: ram,
  gpuCart: gpu,
  cpuCart: cpu,
  romCart: rom,
  rom1: {},
  ram1: {},
  cpu1: {},
  gpu1: {}
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
