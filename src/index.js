import Image from './components/Image'

const components = [
  Image
];
const plugin = {
  install(Vue, options) {
    if (plugin.installed) return;
    components.map(component => Vue.component(component.name, component));
    Vue.mixin({
      mounted() {
        console.log('Mounted!');
      }
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  plugin(window.Vue)
}
export default plugin
