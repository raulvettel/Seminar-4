View.renderer.index={};
View.renderer.index.render=function(c){
c.messages = Controller.messages.popMessages();
View.renderTemplate('main-template', 'contents', c);
}