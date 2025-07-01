/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
  [...block.children].forEach((row, index) => {
    var customClass = " list-odd";
    if(index % 2 === 0) {
      customClass = " list-even";

    } else {
      //Do nothing

    }
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item'.append(customClass);
    details.append(summary, body);
    row.replaceWith(details);
  });
}