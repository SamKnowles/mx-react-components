const focusableSelectors = [
  'input',
  'select',
  'a[href]',
  'textarea',
  'button',
  '[tabindex]'
];

const getFocusableNodesInElement = el => {
  return el.querySelectorAll(focusableSelectors.join(',')).filter(node => {
    const nodeTabIndexAttr = parseInt(node.getAttribute('tabindex'), 10);
    const nodeTabIndex = isNaN(nodeTabIndexAttr) ? node.tabIndex : nodeTabIndexAttr;
    const nodeAriaHiddenAttr = node.getAttribute('aria-hidden');

    return nodeTabIndex > 0 && !nodeAriaHiddenAttr;
  });
};

const toggleFocusAttributesForNode = (node, focusable) => {
  node.setAttribute('tabindex', focusable ? 0 : -1);
  node.setAttribute('aria-hidden', !focusable);
};

module.exports = {
  focusableSelectors,
  getFocusableNodesInElement,
  toggleFocusAttributesForNode
};