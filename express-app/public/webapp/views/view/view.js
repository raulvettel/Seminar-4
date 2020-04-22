var View = {};

View.renderTemplate = function (id, container, context) {
  return View.loadTemplate(id)
    .then(function (source) {
      var template = Handlebars.compile(source);
      var html = template(context);
      return $('#' + container).html(html)
    })
}

View.loadTemplate = function (filename) {
  return $.ajax({
    url: '/webapp/views/templates/' + filename + '.hbs'
  });
}

View.loadPartial = function (filename) {
  return $.ajax({
    url: '/webapp/views/partials/' + filename + '.hbs'
  })
    .then(function (contents) {
      return Handlebars.registerPartial(filename, contents);
    });
}

$(function () {
  var promises = [
    View.loadPartial('book-partial')
  ];
  Promise.all(promises)
    .then(function () {
      return $(function () {
        View.renderTemplate('main-template', 'contents', { book: book, book2: book2 });
      })
    });
  View.renderTemplate('main-template', 'contents', { book: book, book2: book2 });
})

