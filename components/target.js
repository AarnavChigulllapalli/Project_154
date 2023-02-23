// Registering component in Target.js

AFRAME.registerComponent("targets", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `target${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + -50);      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + 40);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createTarget(id, position);
      }
    } ,
  
    createTarget: function(id, position) { 
      
      var terrainEl = document.querySelector("#island");
  
      var targetEl = document.createElement("a-entity");
  
      targetEl.setAttribute("id",id);
      targetEl.setAttribute("position",position);

      birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
      
      targetEl.setAttribute("gltf-model","./assets/fish/scene.gltf");   

      targetEl.setAttribute("animation-mixer", {});
  
      terrainEl.appendChild(targetEl);
    }
  });
  
  