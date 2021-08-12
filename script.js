AFRAME.registerComponent('change-tree-color',{
  init: function() {
    var sceneEl = document.querySelector('a-scene'); 
    sceneEl.querySelectorAll('a-cylinder')[0].setAttribute('material', {color: 'purple'});
    sceneEl.querySelectorAll('a-cylinder')[1].setAttribute('material', {color: 'purple'});

  }
});

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