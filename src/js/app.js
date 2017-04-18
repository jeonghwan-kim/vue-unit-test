new Vue({
  el: "#app",
  methods: {
    onSearch: function(data) {
      alert(data.query);
    }
  }
});
