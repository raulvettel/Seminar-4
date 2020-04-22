Controller.controllers.index = {};
Controller.controllers.index.refresh = function(){
var context = {};
Model.getBooks()
.then(function(books){
context.book = books[0];
context.book2 = books[1];
View.renderer.index.render(context);
});
 }