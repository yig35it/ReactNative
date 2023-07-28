import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <Text>hello wwword!</Text>
      <Text>MERHABAYIN</Text>
      <Text>yayol</Text>
      
      <Text>MEsdgakdsagkasgk</Text>
      <StatusBar style="cover" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b658b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});