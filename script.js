
//Component 1: This component grabs both cylinders (barks of the trees) and turns them purple
AFRAME.registerComponent('change-tree-color',{
  init: function() {
    var sceneEl = document.querySelector('a-scene'); 
    sceneEl.querySelectorAll('a-cylinder')[0].setAttribute('material', {color: 'purple'});
    sceneEl.querySelectorAll('a-cylinder')[1].setAttribute('material', {color: 'purple'});

  }
});

 //Copmonent 2: This component changes the color of the snowman 
 AFRAME.registerComponent('change-color-on-hover', {
  init: function () {
    var snowHead = this.el;  // <a-box>

    snowHead.addEventListener('mouseenter', function () {
      snowHead.setAttribute('color', 'purple');
    });

    snowHead.addEventListener('mouseleave', function () {
      snowHead.setAttribute('color', 'white');
    });
  }
});

//Component 3: This component changed the body of the snowman to a random color when it is clicked
AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var COLORS = ['red', 'green', 'blue', 'yellow', 'purple'];
      var snowBody = this.el;
      snowBody.addEventListener('click',function() {
        var randomIndex = Math.floor(Math.random() * COLORS.length);
        snowBody.setAttribute('material', {color:  COLORS[randomIndex]});
      });
    }
  });

 

