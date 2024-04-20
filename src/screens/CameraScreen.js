import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CameraComponent from '../components/CameraComponent'; // Importando o componente de câmera

const CameraScreen = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    // Lógica para iniciar a gravação do vídeo usando o microfone interno
    setIsRecording(true);
    // Adicione aqui a lógica para iniciar a gravação
  };

  const stopRecording = () => {
    // Lógica para parar a gravação do vídeo
    setIsRecording(false);
    // Adicione aqui a lógica para parar a gravação
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CameraComponent /> {/* Exibindo o componente de câmera */}

      <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
        <Text>{isRecording ? 'Parar Gravação' : 'Iniciar Gravação'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
