import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecord = async () => {
    if (isRecording) {
      // Finalizar gravação
      setIsRecording(false);
    } else {
      // Iniciar gravação
      setIsRecording(true);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={true}
      />
      <View style={styles.controls}>
        <TouchableOpacity onPress={handleRecord} style={styles.recordButton}>
          <Text style={styles.recordText}>{isRecording ? 'Stop' : 'Record'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  preview: {
    flex: 1,
    width: '100%',
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  recordButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
