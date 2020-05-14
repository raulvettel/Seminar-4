Controller.controllers.index = {};
Controller.controllers.index.refresh = function(){
var context = {};
Model.getBooks()
.then(function(books){
context.books = books;
View.renderer.index.render(context);
});
}

event.preventDefault();
Controller.router.go(event.target.href);