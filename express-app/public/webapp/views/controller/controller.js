Controller = {};
Controller.controllers = {};
Controller.router = {};
Controller.router.route = function () {
var path = location.pathname;
var matching = null;

if (matching = path.match(/ˆ\/webapp\/$/)) {
Controller.controllers.index.refresh();
} else {
console.error('Page not found!');
}
}