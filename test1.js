const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');

let audioContext;
let mediaStreamAudioSourceNode;
let audioWorkletNode;

//시작버튼 입력시
startBtn.addEventListener('click', async () => {
  document.write("녹음 시작");
  //마이크 권한
  const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

  //음성 입력받기
  audioContext = new AudioContext();
  mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(micStream);

  //
  await audioContext.audioWorklet.addModule("audioprocess.js");
  audioWorkletNode = new AudioWorkletNode(audioContext,'audioprocess');
  mediaStreamAudioSourceNode.connect(audioWorkletNode);
});

//중지버튼 입력시
stopBtn.addEventListener('click', () => {
  document.write("녹음 중지");
  mediaStreamAudioSourceNode.disconnect();
  audioContext.close();
});
