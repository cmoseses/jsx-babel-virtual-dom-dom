class React {
  static createElement(tag, attributes, children) {
    return { tag, attributes, children };
  }

  static render(component, targetDom) {
    const rNode = React.vNodeToRNode(component());
    targetDom.appendChild(rNode);
  }

  static vNodeToRNode(vNode) {
    if (typeof vNode === "string") return document.createTextNode(vNode);

    let n = document.createElement(vNode.tag);
    let a = vNode.attributes || {};
    Object.keys(a).forEach(k => n.setAttribute(k, a[k]));

    if (typeof vNode.children === "string") {
      n.appendChild(document.createTextNode(vNode.children));
    } else {
      (vNode.children || []).forEach(c => n.appendChild(React.vNodeToRNode(c)));
    }
    return n;
  }
}
export { React };
