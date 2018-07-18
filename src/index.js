import Input from './components/Input'
import Textarea from './components/Textarea'
import DatePicker from './components/DatePicker'
import Image from './components/Image'
import Images from './components/Images'
import DateTimePicker from './components/DateTimePicker'
import Simditor from './components/Simditor'
import _ from 'lodash'
const components = [
   Input, Textarea,DatePicker,Image,DateTimePicker,Simditor,Images
];
const plugin = {
  install(Vue, options) {
    options = _.isObject(options)?options:{url:''};
    if (plugin.installed) return;
    components.map(component => Vue.component(component.name, component));
    //子组件复用
    Vue.mixin({
      mounted() {
      },
      props: {
        url:{default:options.url},
        options: {
          type: Object,
          default: () => {
            return {}
          }
        }
      },
      computed: {
        className() {
          if(!this.options.class)this.options.class='';
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
  window.Vue.use(plugin)
}
export default plugin
