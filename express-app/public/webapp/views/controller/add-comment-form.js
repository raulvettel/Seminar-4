Controller.controllers.addCommentForm={};
Controller.controllers.addCommentForm.refresh = function (matching) {

Model.getBook(matching.input[24])
 .then(function (book) {
 View.renderer.commentForm.render(book);
 })
 .catch(function(err){
 console.error('Book not found!', err)
 });
 }