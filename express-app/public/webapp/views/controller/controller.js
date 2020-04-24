Controller = {};
Controller.controllers = {};
Controller.router = {};
Controller.router.route = function () {
var path = location.pathname;
var matching = null;
console.log(path)
if (matching = path.match(/webapp\/views\/$/)) {
Controller.controllers.index.refresh();
} 
else if (path = path.match(/webapp\/view\/book\/(w*)\/addComment\//)) {
Controller.controllers.addCommentForm.refresh(path);
} 
else {
console.error('Page not found!');
}
}