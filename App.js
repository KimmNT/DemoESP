import {View, Text, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import React from 'react';
import espSmartconfig from 'react-native-esp-smartconfig';

export default function App() {
  const handleConnectWF = async () => {
    await espSmartconfig
      .start({
        bssid: 'nichietsu',
        ssid: 'nichietsu',
        password: 'Aa@123456',
      })
      .then(function (results) {
        // Array of devices, successfully handshaked by smartconfig
        console.log(results);
        /*[
    {
      'bssid': 'device-bssid', // device bssid
      'ipv4': '192.168.1.11'   // device local ip address
    }
  ]*/
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleStop = async () => {
    await espSmartconfig.stop();
  };

  return (
    <SafeAreaView>
      <Text>Test Connect WiFi to ESP32</Text>
      <Button title="Connect WiFi" onPress={handleConnectWF} />
      <Button title="Cancel Stop" onPress={handleStop} />
    </SafeAreaView>
  );
}
