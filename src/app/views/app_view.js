define(function(require, exports, module){
  var Template = require('hbs!templates/edit');

  console.log(Template({
    name: 'Bogus',
    description: 'fer real'
  }));

  var AppView = Backbone.View.extend({
    initialize: function(options){
      this.listenTo(this.model, 'change', this.render);
    },

    events: {
      "keyup [bb-binding]" : 'handleBoundValueChange',
      "click .save": 'save'
    },

    save: function(){
      this.model.save();
    },

    handleBoundValueChange: function(e){
      var $source = $(e.currentTarget);
      var key = $source.attr('bb-binding');
      this.model.set(key, $source.val());
    },

    render: function(){
      var _self = this;
      this.$el.html(Template(this.model.toJSON()));
    }
  });

  return AppView;
});