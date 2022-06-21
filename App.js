// @refresh reset
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC90tWGxe2sW0HhPrPut2HKQwih1LxTjzc",
//   authDomain: "react-native-chat-d45da.firebaseapp.com",
//   projectId: "react-native-chat-d45da",
//   storageBucket: "react-native-chat-d45da.appspot.com",
//   messagingSenderId: "298456423380",
//   appId: "1:298456423380:web:224688b81626e8f1fc1441"
// };

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
