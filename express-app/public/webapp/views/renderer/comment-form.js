 View.renderer.commentForm = {};
 View.renderer.commentForm.render = function (c) {
 c.messages = Controller.messages.popMessages();
 View.renderTemplate('comment-form-template', 'contents', c);
 }