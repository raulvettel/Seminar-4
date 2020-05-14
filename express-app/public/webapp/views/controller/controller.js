Controller = {};
Controller.controllers = {};
Controller.router = {};
Controller.router.route = function () {
var path = location.pathname;
var matching = null;

if (matching = path.match(/webapp\/views\/$/)) {
Controller.controllers.index.refresh();
} // \/addComment\/
else if (path = path.match(/webapp\/views\/view\/book\/(w*)/)) {
    Controller.controllers.addCommentForm.refresh(path);
} 
else {
console.error('Page not found!');
}
}