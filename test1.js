const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');

let audioContext;
let mediaStreamAudioSourceNode;
let audioWorkletNode;

//시작버튼 입력시
startBtn.addEventListener('click', async () => {

  //마이크 권한
  const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

});
