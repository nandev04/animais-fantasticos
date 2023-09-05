export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-toolTip]');
  const onMouseMove = {
    tooltipbox: '',
    handleEvent(event) {
      this.tooltipbox.style.top = `${event.pageY + 20}px`;
      this.tooltipbox.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipbox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
    },
  };

  function createToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }

  function onMouseOver() {
    const toolTipBox = createToolTipBox(this);

    onMouseMove.tooltipbox = toolTipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipbox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
