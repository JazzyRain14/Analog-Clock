var hrs = document.getElementById("hours");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");
var meridian = document.getElementById("meridian");
setInterval(() => {
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var meri = 'AM';
  if(h>12){
    h=h-12;
    meri = 'PM'
  }if(h<10){
    h= '0'+h
  }else{h=h};
  m = (m<10)? '0' + m : m;
  s = (s<10)? '0' + s : s;
  hrs.innerHTML=h;
  sec.innerHTML=s;
  minutes.innerHTML=m;
  meridian.innerHTML=meri;
});