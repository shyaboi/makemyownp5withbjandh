var x = document.getElementById("myAudio");
var cTime;

function playAudio() {
  x.play();
  dinus()
}

function pauseAudio() {
  x.pause();
}

function skipAudio() {
  x.currentTime +=20
}

const dinus = () => {
  setInterval(() => {
  cTime = parseInt(x.currentTime);
  // cTime = x.currentTime;
  console.log(cTime)
  if(cTime===0){return}
  if (cTime % 3===0&&cTime%5===0) {
    console.log(cTime+'boooooooooth');
    document.querySelector("html").style.background =
      "url('assets/me.png')";
    return;
  }
  if (cTime % 3===0) {
    console.log('only 3 '+cTime);
    document.querySelector("html").style.background =
      "url('assets/bffpy.jpg')";
    return;
  }

  if (cTime % 5===0) {
    console.log('only 5 '+cTime);

    // alert(`this many thing  ${cTime}`)
    document.querySelector("html").style.background =
      "url('assets/bff.png')";
    return;
  }
}, 100);
}
