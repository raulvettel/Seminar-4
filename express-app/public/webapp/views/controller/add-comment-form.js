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

    Controller.controllers.addCommentForm.addComment_clicked = function (event, bid) {
         event.preventDefault();
         var comment = {
         content: $('#comment').val(),
         email: $('#email').val()
         }
         Model.addCommentToBook(bid, comment)
        .then(function () {
        if (comment.email.length < 1)
         throw new Error('Email cannot be empty')
         Controller.messages.pushInfo('Comment added successfully');
         console.log('Comment added successfully');
         Controller.router.go('/webapp/views/');
         })
         .catch(function (err) {
         Controller.messages.pushError('Comment cannot be added: '+err.message);
         console.error('Comment cannot be added', err.message);
         Controller.router.go('');
         })
         }