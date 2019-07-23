const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);

  // set attributes as specified in vNode.attrs
  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  // append all children as specified in vNode.children
  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
};

const render = vNode => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  // assume everything else will be a element
  return renderElem(vNode);
};

export default render;
