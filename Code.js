<!DOCTYPE HTML>
<html>

<head>
   <meta http-equiv="Content-Type"
      content="text/html; charset=utf-8">
 
      <title>
        JavaScript function to find
         the area of a triangle and circle
      </title>
</head>
<body style="text-align: center;">
  <h1 style="color: rgb(128, 26, 0);">
      JSPM's BSIOTR <br> JavaScript Practical 1
  </h1>
  <h4>
       JavaScript function to find
       the area of a circle, triangle and rectangle
    </h4>
 <label for="radius">
     Enter the value radius:
 </label>
 <input type="number" id="radius"
 placeholder="Enter the radius">
 <br><br>

 <label for="side1">
    Enter the value of side 1:
 </label>
 <input type="number" id="side1"
 placeholder="Enter value of side 1">
 <br><br>
 <label for="side2">
    Enter the value of side 2:
 </label>
 <input type="number" id="side2"
 placeholder="Enter value of side 2">
 <br><br>
 <label for="side3">
    Enter the value of side 3:
 </label>
 <input type="number" id="side3"
 placeholder="Enter value of side 2">
 <br><br>

 <label for="length">
    Enter the value length:
 </label>
 <input type="number" id="length"
 placeholder="Enter the length">
 <br><br>

 <label for="breadth">
    Enter the value breadth:
 </label>
 <input type="number" id="breadth"
 placeholder="Enter the breadth">
 <br><br>

 <button onclick="Area_circle()">Click Here for area of circle!</button>

 <button onclick="Area_triangle()">Click Here for area of triangle!</button>

 <button onclick="Area_rectangle()">Click Here for area of rectangle!</button>

 <p>
    Area of Triangle: <span id="display"></span>

 </p>
 <script type="text/javascript">
   function Area_circle(){
       var r = document.getElementById('radius').value;
       alert("The area of the circle is " + (r * r * Math.PI));
 }
     function Area_triangle() {
         var side1 = parseInt(document
         .getElementById("side1").value);

      var side2 = parseInt(document
      .getElementById("side2").value);
 
      var side3 = parseInt(document
      .getElementById("side3").value);
 
     console.log(typeof(side1));
     var s = (side1 + side2 + side3) / 2;

     var area = Math.sqrt(s * ((s - side1)
             * (s - side2) * (s - side3)));
     document.getElementById("display").innerHTML = area;
 }
   function Area_rectangle(){
     var length = parseInt(document
        .getElementById("length").value);
     var breadth = parseInt(document
        .getElementById("breadth").value); 
     alert("Area of rectangle: "+(length*breadth)) ;
}
     </script>
</body>
</html>
