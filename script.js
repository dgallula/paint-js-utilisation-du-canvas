window.addEventListener('load',()=>{
  const canvas = document.getElementById('myCanvas')
  const ctx = canvas.getContext('2d')
  var color = document.getElementById('myColor')
  var size = document.getElementById('myRange')

 canvas.height = window.innerHeight/2;
 canvas.width = window.innerWidth/2;

 // pour changer la couleur 
 var myColor=color.value 
 ctx.strokeStyle = myColor 
 // pour changer le width 
 mysize = size.value
 ctx.linewidth= mysize


// function painting 
let painting = false 
function startPosition ()
{
    painting=true
    draw(e)
 }

function endPosition() 
 {
     painting = false
      ctx.beginPath()
 }


//  function colorchange 
 function colorChange() 
 {
     color = color.value
     ctx.strokestyle = color 
 }

 // function sizechanger
  function sizeChanger() 
  {
     mySize= size.value
     ctx.linewidth= mysize
  }

  //   function draw 
 function draw() 
 {

    if(!painting) return ;
   ctx.lineJoin ='round'
   ctx.lineCap ='round'
   ctx.lineTo(e.clientX,e.clientY)

   ctx.strocke()

}

 canvas.addEventListener('mousedown',startPosition)
 canvas.addEventListener('mouseup',endPosition)
 canvas.addEventListener('mousemove',draw)
 color.addEventListener('change',colorChange)
 size.addEventListener('change',sizeChanger)


})
