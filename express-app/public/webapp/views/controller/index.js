Controller.controllers.index = {};
Controller.controllers.index.refresh = function(){
var context = {};
Model.getBooks()
.then(function(books){
context.books = books;
View.renderer.index.render(context);
});
}

Controller.controllers.index.addComment_clicked = function (event, bid, comment) {
 Model.addCommentToBook(bid, comment)

 .then(function () {
 console.log('Comment added successfully');
 })
 .catch(function (err) {
 console.error('Comment cannot be added', err);
 })
 .then(function(){
 Controller.controllers.index.refresh();
 });
 }