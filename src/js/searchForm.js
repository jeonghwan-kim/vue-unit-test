Vue.component('search-form', {
  template: '#search-form',
  data: function () {
    return {
      query: ''
    }
  },
  computed: {
    isEmptyQuery: function () {
      return this.query.length === 0;
    },
  },
  methods: {
    onSearch: function () {
      this.$emit('search', {query: this.query});
    },
    onReset: function () {
      this.query = '';
    }
  }
});