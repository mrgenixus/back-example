define(function(require, exports, module){
  var Template = require('hbs!templates/show');

  var AppModelShowView = Backbone.View.extend({
    initialize: function(options){
      this.listenTo(this.model, 'change', this.render);
    },

    render: function(){
      var _self = this;
      this.$el.html(Template(this.model.toJSON()));
    }
  });

  return AppModelShowView;
});