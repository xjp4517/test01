class RecorderWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.recordedChunks = [];
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    this.recordedChunks.push(new Float32Array(input[0]));
    return true;
  }

  // 녹음된 오디오 데이터를 반환하는 함수
  getRecordedChunks() {
    return this.recordedChunks;
  }
}

registerProcessor('recorder-worklet', RecorderWorkletProcessor);