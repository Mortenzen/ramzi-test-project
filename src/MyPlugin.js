const MyPlugin = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.mixin({
      created: function () {
        console.log(this._data)
      },
    });
  },
};

export default MyPlugin;
