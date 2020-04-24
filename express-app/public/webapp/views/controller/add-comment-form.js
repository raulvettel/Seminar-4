Controller.controllers.addCommentForm={};
Controller.controllers.addCommentForm.refresh = function (matching) {
Model.getBook(matching[1])
 .then(function (book) {
 View.renderer.commentForm.render(book);
 })
 .catch(function(err){
 console.error('Book not found!', err)
 });
 }