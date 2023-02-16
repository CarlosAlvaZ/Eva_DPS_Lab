import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cuervana</Text> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header : {
    height : '50%',
    width : '100%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#063970'
  },
  headerText : {
    fontSize : '30px',
    color : 'white'
  }
});
