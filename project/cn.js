var canvas=document.querySelector('canvas');


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
//vertical line 1
c.beginPath();
c.moveTo(585,45);
c.lineTo(689,242);
c.strokeStyle = "#ffff";
c.stroke();

// hexagon 1
var numberOfSides = 6,
    size = 85,
    Xcenter = 750,
    Ycenter = 350;

 
c.beginPath();
c.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
 
for (var i = 1; i <= numberOfSides;i += 1) {
    c.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}
 
c.strokeStyle = "#ffff";
c.lineWidth = 1;
c.stroke();

//hexagon 2
var numberOfSides = 6,
    size = 120,
    Xcenter = 750,
    Ycenter = 350;
 
c.beginPath();
c.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
 
for (var i = 1; i <= numberOfSides;i += 1) {
    c.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}
 
c.strokeStyle = "#ffff";
c.lineWidth = 1;
c.stroke();

//vertical line 2
c.beginPath();
c.moveTo(813,460);
c.lineTo(950,650);
c.strokeStyle = "#ffff";
c.stroke();

//slant line 2
c.beginPath();
c.moveTo(689,459);
c.lineTo(585,650);
c.strokeStyle = "#ffff";
c.stroke();

//horizontal line 1
c.beginPath();
c.moveTo(325,350);
c.lineTo(625,350);
c.strokeStyle = "#ffff";
c.stroke();

//horizontal line 2
c.beginPath();
c.moveTo(875,350);
c.lineTo(1125,350);
c.strokeStyle = "#ffff";
c.stroke();

//slant line 2
c.beginPath();
c.moveTo(815,245);
c.lineTo(940,45);
c.strokeStyle = "#ffff";
c.stroke();