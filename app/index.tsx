import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    // Aquí defines tu usuario y contraseña de GitHub
    if (user === 'admin' && pass === '12345') {
      setShowLogin(false);
      router.push('/admin'); // Abre el apartado admin.tsx
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      {!showLogin ? (
        <TouchableOpacity style={styles.button} onPress={() => setShowLogin(true)}>
          <Text style={styles.buttonText}>Entrar al Panel Admin</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.loginBox}>
          <Text style={styles.title}>Acceso Administrativo</Text>
          <TextInput 
            placeholder="Usuario" 
            style={styles.input} 
            onChangeText={setUser} 
          />
          <TextInput 
            placeholder="Contraseña" 
            secureTextEntry 
            style={styles.input} 
            onChangeText={setPass} 
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowLogin(false)}>
            <Text style={{ marginTop: 10, color: 'gray' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  loginBox: { width: '80%', padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { width: '100%', height: 40, borderBottomWidth: 1, marginBottom: 15, paddingHorizontal: 10 },
  button: { backgroundColor: '#000', padding: 12, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
