import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';

export default function App() {

  const handlePress = () => {
    if (Platform.OS === 'web') {
      alert("Success! You are running on the Web.");
    } else {
      Alert.alert("Success", "Your environment is fully set up.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>System Check ✅</Text>
      <Text style={styles.subtitle}>
        Running on {Platform.OS === 'web' ? "Web Browser" : "Mobile Device"}
      </Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Test Interaction" 
          onPress={handlePress} 
        />
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  }
});
