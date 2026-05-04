import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function AdminPanel() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Panel Administrativo</Text>

      {/* Apartado de Gestión de Usuarios */}
      <View style={{ marginBottom: 15, padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>Usuarios Activos</Text>
        <Text>Total: 0</Text>
      </View>

      {/* Apartado de Logs de Sistema */}
      <View style={{ marginBottom: 15, padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
        <Text style={{ fontWeight: 'bold' }}>Logs Recientes</Text>
        <Text>Sin errores registrados.</Text>
      </View>
    </ScrollView>
  );
}
