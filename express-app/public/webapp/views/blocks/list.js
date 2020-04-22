Handlebars.registerHelper('list', function (array, options) {
  var out = '<ul>';
  for (var i = 0; i < array.length; i++) {
  out = out + '<li>' + options.fn(array[i]) + '</li>';
  }
  out = out + '</ul>'
  return out;
  });