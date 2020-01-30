(function() {
  var all = document.querySelectorAll('*');
  var paragraphs = document.querySelectorAll('p');

  Array.prototype.forEach.call(all, function(el) {
    el.style.setProperty('line-height', '1.5', 'important');
    el.style.setProperty('letter-spacing', '0.12em', 'important');
    el.style.setProperty('word-spacing', '0.16em', 'important');
  });

  Array.prototype.forEach.call(paragraphs, function(p) {
    p.style.setProperty('margin-bottom', '2em', 'important');
  });
})();
