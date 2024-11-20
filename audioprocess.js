class audioprocess extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        const inputData = inputs[0][0];
        return true;
    }
}

registerProcessor('audioprocess', MyAudioProcessor);
