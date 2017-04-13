function Change_color() {
  var arrayof_colors = ["blue","green","red","orange","yellow","white","teal","orange","brown","purple","pink","gray"];
  var x = Math.floor((Math.random() * 10) + 1);
  y = -1;
  if (y == x) {
    Change_color();
  }
  document.getElementById("bg_color").style.backgroundColor = arrayof_colors[x];
  y = x ;
}
