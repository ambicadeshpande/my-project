y = -1;
function Change_color() {
  var arrayof_colors = ["blue","green","red","orange","pink","white","teal","orange","brown","purple"];
  var x = Math.floor((Math.random() * 10) );

  if (y == x) {
    Change_color();
  }
  document.getElementById("bg_color").style.backgroundColor = arrayof_colors[x];
  y = x ;
}
