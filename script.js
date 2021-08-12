AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var COLORS = ['red', 'green', 'blue', 'yellow', 'purple'];
      this.el.addEventListener('click', function (evt) {
          
        var randomIndex = Math.floor(Math.random() * COLORS.length);
        this.setAttribute('material', 'color', COLORS[randomIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });
  AFRAME.registerComponent('change-color-on-hover', {
    init: function () {
      var el = this.el;  // <a-box>

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', 'purple');
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', 'white');
      });
    }
  });