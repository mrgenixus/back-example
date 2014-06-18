require(['jquery', 'backbone'], function($, Backbone){
  require(['uikit', 'models/app_model', 'views/app_model/edit', 'views/app_model/show'], function(UI, AppModel, AppModelEditView, AppModelShowView){

    var myModel = new AppModel();

    new AppModelEditView({
      el: $('.edit'),
      model: myModel
    }).render();

    new AppModelShowView({
      el: $('.show'),
      model: myModel
    }).render();
  });
});