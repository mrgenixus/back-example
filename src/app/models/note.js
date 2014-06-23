define(function(require, exports, module){
  var Note = Backbone.Model.extend({
    url: '/notes',

  });
  return Note;
});