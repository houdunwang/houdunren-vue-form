import FormGroup from './components/FormGroup'
import Input from './components/Input'

const components = [
  FormGroup, Input
];
const plugin = {
  install(Vue, options) {
    if (plugin.installed) return;
    components.map(component => Vue.component(component.name, component));
    //子组件复用
    Vue.mixin({
      mounted() {
      },
      props: {
        name: {type: String},
        title: {type: String},
        value: {type: String, default: ''},
        error: {type: String, default: ''},
        options: {
          type: Object,
          default: () => {
            return {}
          }
        }
      },
      computed: {
        className() {
          if (this.error) {
            this.options.class += ' is-invalid';
          }
          return this.options.class;
        }
      },
      methods: {
        // 属性格式化为字符串
        formatAttribute(options) {
          let attribute = '';
          options.forEach((v, k) => {
            attribute += ` {$k}="{$v}" `;
          });
          return attribute;
        }
      }
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  plugin(window.Vue)
}
export default plugin
