import debounce from './debounce.js';

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.clientDist = {
      startX: 0,
      movement: 0,
      endX: 0,
    };
    this.activeClass = 'active';
    this.changeEvent = new Event('changeEvent');
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  addMove() {
    this.wrapper.addEventListener('touchmove', this.onMove);
    this.wrapper.addEventListener('mousemove', this.onMove);
    return this;
  }

  onMove(event) {
    let clientX;
    if (event.type === 'mousemove') {
      clientX = event.clientX;
    } else {
      clientX = event.changedTouches[0].clientX;
    }
    const finalPosition = this.updatePosition(clientX);
    this.movieSlide(finalPosition);
  }

  onDown(event) {
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.clientDist.startX = event.clientX;
    } else {
      this.clientDist.startX = event.changedTouches[0].clientX;
    }
    this.addMove();
    this.transition(false);
  }

  endMove() {
    this.wrapper.removeEventListener('touchstart', this.onMove);
    this.wrapper.removeEventListener('mousemove', this.onMove);
    return this;
  }

  onUp() {
    this.clientDist.endX = this.movePosition;
    this.endMove();
    this.transition(true);
    this.changeSlideOnEnd();
  }

  updatePosition(clientX) {
    this.clientDist.movement = (this.clientDist.startX - clientX) * 1.4;
    return this.clientDist.endX - this.clientDist.movement;
  }

  movieSlide(finalPosition) {
    this.movePosition = finalPosition;
    this.slide.style.transform = `translate3d(${finalPosition}px, 0, 0)`;
  }

  changeSlideOnEnd() {
    if (this.clientDist.movement < -150 && this.indexNav.prev !== undefined) {
      this.activePrevSlide();
    } else if (this.clientDist.movement > 150 && this.indexNav.next !== undefined) {
      this.activeNextSlide();
    } else {
      this.changeSlide(this.indexNav.active);
    }
  }

  changeActiveClass() {
    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));
    this.slideArray[this.indexNav.active].element.classList.add(this.activeClass);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.calculationSlide(element);
      return {
        element,
        position,
      };
    });
  }

  changeSlide(index) {
    this.slidesConfig();

    this.movieSlide(this.slideArray[index].position);
    this.clientDist.endX = this.slideArray[index].position;

    this.slideIndexNav(index);
    this.changeActiveClass();

    this.wrapper.dispatchEvent(this.changeEvent);
  }

  calculationSlide(element) {
    const totalPosition = (this.wrapper.offsetWidth - element.offsetWidth) / 2;
    return -(element.offsetLeft - totalPosition);
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.indexNav.active);
    }, 500);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.onMove = this.onMove.bind(this);

    this.onDown = this.onDown.bind(this);
    this.onUp = this.onUp.bind(this);

    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);

    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onDown);
    this.wrapper.addEventListener('touchstart', this.onDown);
    this.wrapper.addEventListener('mouseup', this.onUp);
    this.wrapper.addEventListener('touchend', this.onUp);
  }

  init() {
    this.bindEvents();
    this.transition(true);
    this.addEvents();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}

export default class NavSlide extends Slide {
  slideIndexNav(index) {
    const lastIndex = [...this.slide.children].length - 1;
    this.indexNav = {
      prev: index <= 0 ? undefined : index - 1,
      active: index,
      next: index >= lastIndex ? undefined : index + 1,
    };
  }

  activePrevSlide() {
    if (this.indexNav.prev !== undefined) {
      this.changeSlide(this.indexNav.prev);
    }
  }

  activeNextSlide() {
    if (this.indexNav.next !== undefined) {
      this.changeSlide(this.indexNav.next);
    }
  }

  selectButton(prev, next) {
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    return this;
  }

  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';

    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem);
  }

  activeControlItem() {
    this.arrayControl.forEach(item => item.classList.remove(this.activeClass));

    this.arrayControl[this.indexNav.active].classList.add(this.activeClass);
  }

  addEventControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl();
    this.arrayControl = [...this.control.children];

    this.arrayControl.forEach((item, index) => this.eventControl(item, index));

    this.activeControlItem();
  }
}
