(function() {
  if (!document.querySelector('#results')) {
    alert("No results container found.");
    return;
  }
  
  const nonWcagResults = Array.from(document.querySelectorAll('#results li'))
    .filter(result => result.classList.length)
    .filter(result => {
      const resultText = '' + (result.innerText !== undefined ? result.innerText : result.textContent);
      const filterRE = "" +
        "tag seen|" +
        "Stray end tag|" +
        "Bad start tag|" +
        "violates nesting rules|" +
        "Duplicate ID|" +
        "first occurrence of ID|" +
        "Unclosed element|" +
        "not allowed as child of element|" +
        "unclosed elements|" +
        "not allowed on element|" +
        "unquoted attribute value|" +
        "Duplicate attribute";
      return resultText.match(filterRE) === null || 
      (
        resultText.indexOf("not allowed on element") !== -1 && 
        resultText.indexOf("ng-") !== -1
      )
    });
  
  nonWcagResults.forEach(result => {
    result.style.display = "none";
    result.classList.add("steveNoLike");
  })
  
  setTimeout(() => alert(`Complete. ${nonWcagResults.length} items removed.`), 0);
})();
