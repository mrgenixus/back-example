define(function(require, exports, module){
  var Note = require('models/note');
  var Notes = Backbone.Collection.extend({
    model: Note
  });
  return Notes;
});