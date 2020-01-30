(function() {
  var all = document.querySelectorAll('*');
  var paragraphs = document.querySelectorAll('p');

  Array.prototype.forEach.call(all, function(el) {
    el.style.lineHeight = '1.5';
    el.style.letterSpacing = '0.12em';
    el.style.wordSpacing = '0.16em';
  });

  Array.prototype.forEach.call(paragraphs, function(p) {
    p.style.marginBottom = '2em';
  });
})();
