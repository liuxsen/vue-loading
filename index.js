import loadingComponent from './loading.vue'
let $vm;
export default {
  install(Vue,optinos){
    if(!$vm){
      const LoadingPlugin = Vue.extend(loadingComponent);
      console.log('LoadingPlugin:',LoadingPlugin);
      $vm = new LoadingPlugin({
        el: document.createElement('div')
      });
      document.body.appendChild($vm.$el);
    }
    $vm.show = false;
    let loading = {
      show(text){
        $vm.show = true;
        $vm.text = text;
      },
      hide(){
        $vm.show = false;
      }
    }
    if(!Vue.$loading){
      Vue.$loading = loading;
    }
    Vue.mixin({
      created(){
        this.$loading = Vue.$loading;
      }
    })
  }
}