require(['jquery', 'backbone'], function($, Backbone){
  require(['uikit'], function(UI){

    var AppModel = Backbone.Model.extend({
      url: '/app_models',
      save: _.debounce(Backbone.Model.prototype.save, 300)
    });

    var AppView = Backbone.View.extend({
      initialize: function(options){
        this.listenTo(this.model, 'change', this.render);
      },

      events: {
        "keyup [bb-binding]" : 'handleBoundValueChange'
      },

      handleBoundValueChange: function(e){
        var $source = $(e.currentTarget);
        var key = $source.attr('bb-binding');
        this.save(key, $source.val());
      },

      render: function(){
        var _self = this;
        this.$('[bb-binding]').each(function(index, tpItem){
          var key = $(tpItem).attr('bb-binding');
          var val = _self.model.get(key);

          switch (tpItem.tagName) {
            case 'input':
            case 'textarea':
              $(tpItem).val(val);
              break;
            default:
              $(tpItem).html(val);
              break;
          }
        });
      },

      save: function(key, val){
        this.model.set(key, val);
        this.model.save();
      }
    });

    var myModel = new AppModel();

    var EditAppView = new AppView({
      el: $('.edit'),
      model: myModel
    });

    var showAppView = new AppView({
      el: $('.show'),
      model: myModel
    });
  });
});