define(function(require, exports, module){
  var NoteEditView = require('views/note/edit');
  var NoteShowView = require('views/note/show');
  var NoteIndexView = require('views/note/index');
  var Notes = require('collections/notes');
  var Note = require('models/note');

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }

  var AppView = Backbone.View.extend({
    initialize: function() {
      this.notes = new Notes([{title:"Hello"}]);
    },

    replaceSubView: function(subView) {
      if( this.subView ) {
        this.subView.remove();
      }

      this.subView = subView;
    },

    new: function() {

      var note = new Note({id: this.guid()});
      this.listenToOnce(note, 'change', this.addNote);

      this.replaceSubView(new NoteEditView({
        className: 'subview uk-panel-box uk-width-1-3',
        model: note,
        app: this
      }));

      this.subView.render();
      this.$el.html(this.subView.$el);
    },

    edit: function(id) {
      
      this.replaceSubView(new NoteEditView({
        className: 'subview uk-panel-box uk-width-1-3',
        model: this.notes.get(id),
        app: this
      }));

      this.subView.render();
      this.$el.html(this.subView.$el);
    },

    show: function(id) {
      this.replaceSubView(new NoteShowView({
        className: 'subview uk-panel-box uk-width-1-3',
        model: this.notes.get(id),
        app: this
      }));
      this.subView.render();
      this.$el.html(this.subView.$el);
    },

    index: function() {
      this.replaceSubView(new NoteIndexView({
        className: 'subview uk-panel-box uk-width-1-3',
        collection: this.notes,
        app: this
      }));
      this.subView.render();
      this.$el.html(this.subView.$el);
    },

    addNote: function(note) {
      this.notes.add(note);
    },

    render: function(){
      return this.index();
    },

    guid: function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
             s4() + '-' + s4() + s4() + s4();
    }
  });

  return AppView;
});