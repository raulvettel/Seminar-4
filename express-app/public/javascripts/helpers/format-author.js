Handlebars.registerHelper('formatAuthor', function (author) {
  return author.surname.toUpperCase() + ',' + author.name;
  });