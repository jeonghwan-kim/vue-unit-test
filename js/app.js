Vue.component('section-title', {
  template: '#section-title',
  props: ['title', 'subTitle']
});

const vm = new Vue({
  el: "#app",
  data: {
    foo: 'bar'
  }
});
