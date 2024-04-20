import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
import Video from 'react-native-video';

const CameraComponent = () => {
  const cameraRef = useRef(null);

  const startRecording = async () => {
    // Lógica para iniciar a gravação do vídeo usando o microfone interno
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={true}
      />
      <TouchableOpacity onPress={startRecording}>
        <Text>Iniciar Gravação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraComponent;
