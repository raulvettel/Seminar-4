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

Controller.router.go = function (url) {
history.pushState(null, '', url);
Controller.router.route();
}

Controller.messages = {};
Controller.messages.errors = []
Controller.messages.pushError = function (error) {
Controller.messages.errors.push(error);
}
Controller.messages.infos = []
Controller.messages.pushInfo = function (info) {
Controller.messages.infos.push(info);
}
    Controller.messages.popMessages = function () {
    var result = {
    errors: Controller.messages.errors.slice(),
    infos: Controller.messages.infos.slice()
    }
    Controller.messages.infos = [];
    Controller.messages.errors = [];
    return result;
}