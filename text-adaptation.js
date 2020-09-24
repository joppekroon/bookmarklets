(function() {
  adapt(window);
  
  function adapt(win) {
    const all = win.document.querySelectorAll('*');
    const paragraphs = win.document.querySelectorAll('p');
    
    Array.prototype.forEach.call(all, function(el) {
      el.style.setProperty('line-height', '1.5', 'important');
      el.style.setProperty('letter-spacing', '0.12em', 'important');
      el.style.setProperty('word-spacing', '0.16em', 'important');
    });
  
    Array.prototype.forEach.call(paragraphs, function(p) {
      p.style.setProperty('margin-bottom', '2em', 'important');
    });
    
    const frames = win.frames;
    for (let i = 0; i < frames.length; i++) {
      try {
        adapt(frames[i].window);
      } catch (err) {
        console.log(frames[i].location, err);
      }
    }
  }
})();
