
//Component 1: This component grabs both cylinders (barks of the trees) and turns them purple
AFRAME.registerComponent('change-tree-color',{
  init: function() {
    var sceneEl = document.querySelector('a-scene'); 
    sceneEl.querySelectorAll('a-cylinder')[0].setAttribute('color', 'purple');
    sceneEl.querySelectorAll('a-cylinder')[1].setAttribute('color', 'purple');

  }
});

 //Copmonent 2: This component changes the color of the snowman 
 AFRAME.registerComponent('change-color-on-hover', {
  init: function(){
        var snowHead = this.el; //grabs reference to the component it is attached to
        snowHead.onmouseenter =function(){
            snowHead.setAttribute('color', 'purple');
        }

        snowHead.onmouseleave = function(){
            snowHead.setAttribute('color','white');
        }
    }
});

//Component 3: This component changed the body of the snowman to a random color when it is clicked
AFRAME.registerComponent('cursor-listener', {
    init: function(){
      var COLORS = ['red','green','blue','yellow','purple'];
      var snowBody = this.el;
      snowBody.onclick = function(){
          var randomIndex = Math.floor(Math.random() * COLORS.length);
          snowBody.setAttribute('color', COLORS[randomIndex]);
      }
    }
  });

 

