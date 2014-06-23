require(['jquery', 'backbone'], function($, Backbone){
  require([
    'uikit',
    'models/note',
    'views/app_view',
    'views/note/index',
    'views/note/edit',
    'views/note/show',
    'router'
  ],
  function(
    UI,
    Note,
    AppView,
    NotesIndex,
    NotesEditView,
    NotesShowView,
    Router
  ){

    var app = new AppView({el:$('[bb-app]')});

    app.render();

    new Router({app:app});

    Backbone.history.start();
  });
});