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

 Controller.controllers.addCommentForm.cancel_clicked=function(event){
    event.preventDefault();
    Controller.router.go('/webapp/views/');
    }