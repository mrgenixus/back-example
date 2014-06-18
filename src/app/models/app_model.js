define(function(require, exports, modules){
  var AppModel = Backbone.Model.extend({
      url: '/app_models',
      save: _.debounce(Backbone.Model.prototype.save, 300)
    });

  return AppModel;
});