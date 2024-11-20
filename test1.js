const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');

let audioContext;
let micStreamAudioSourceNode;
let audioWorkletNode;

//시작버튼 입력시
startbtn.addEventListener('click', async () => {
  
  //에러 체크
  if (!window.AudioContext || !window.MediaStreamAudioSourceNode || !window.AudioWorkletNode) {
    alert('api 에러');
    return;
  }
  
  //마이크 권한
  const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

  //음성 입력받기
  audioContext = new AudioContext();
  mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(micStream);

  //
  await audioContext.audioWorklet.addModule("audioprocess.js");
  audioWorkletNode = new AudioWorkletNode(audioContext,'audioprocess');
  micStreamAudioSourceNode.connect(audioWorkletNode);
});

//중지버튼 입력시
stopButton.addEventListener('click', () => {
  micStreamAudioSourceNode.disconnect();
  audioContext.close();
});
