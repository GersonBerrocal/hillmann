class Slider {
  constructor(slide) {
    this.slider = slide;
    this.btnLeft = slide.querySelector(".slider__btnLeft");
    this.btnRight = slide.querySelector(".slider__btnRight");
    this.sliderScroll = slide.querySelector(".slider__scroll");
  }
  buttonActive = () => {
    this.btnLeft.addEventListener("click", event => {
      event.preventDefault();
      this.retrocede(this.datos());
    });
    this.btnRight.addEventListener("click", event => {
      event.preventDefault();
      this.avanza(this.datos());
    });
  }
  datos = () => {
    let anchoPantalla = this.slider.scrollWidth;
    let anchoScroll = this.sliderScroll.scrollWidth;
    let avanzado = this.sliderScroll.scrollLeft;
    let falta = anchoScroll - (avanzado + anchoPantalla);
    return {
      falta,
      avanzado,
      anchoPantalla,
      anchoScroll
    }
  }
  avanza = data => {
    if (data.falta > data.anchoPantalla) {
      this.sliderScroll.scrollLeft = data.avanzado + data.anchoPantalla;
    } else if (data.falta != 0) {
      this.sliderScroll.scrollLeft = data.anchoScroll;
    }
  }
  retrocede = data => {
    if (data.avanzado > data.anchoPantalla) {
      this.sliderScroll.scrollLeft = data.avanzado - data.anchoPantalla;
    } else if (data.avanzado != 0) {
      this.sliderScroll.scrollLeft = 0;
    }
  }
};

export default Slider;