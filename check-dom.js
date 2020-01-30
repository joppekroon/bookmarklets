(function() {
  function serialize(doc) {
    let result = "";
    for (doc = doc.firstChild; doc; doc = doc.nextSibling) {
      switch (doc.nodeType) {
        case Node.ELEMENT_NODE:
          result += doc.outerHTML;
          break;
        case Node.TEXT_NODE:
          result += doc.nodeValue;
          break;
        case Node.CDATA_SECTION_NODE:
          result += "<![CDATA[" + doc.nodeValue + "]]>";
          break;
        case Node.COMMENT_NODE:
          result += "<!--" + doc.nodeValue + "-->";
          break;
        case Node.DOCUMENT_TYPE_NODE:
          result += "<!DOCTYPE " + doc.name + ">\n";
      }
    }
    return result;
  };
  
  form = document.createElement("form");
  form.method = "POST";
  form.action = "https://validator.w3.org/nu/";
  form.enctype = "multipart/form-data";
  form.target = "_blank";
  form.acceptCharset = "utf-8";
  
  const show = document.createElement("textarea");
  show.name = "showsource";
  show.value = "yes";
  form.appendChild(show);
  
  const content = document.createElement("textarea");
  content.name = "content";
  content.value = serialize(document);
  form.appendChild(content);
  
  document.body.appendChild(form);
  form.submit();
  
  form.addEventListener('submit', document.body.removeChild(form));
})();
