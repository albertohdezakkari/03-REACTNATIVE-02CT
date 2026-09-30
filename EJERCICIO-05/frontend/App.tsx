import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://192.168.1.50:3000';

export default function App() {
  async function cargarMensaje() {
    const r = await fetch(API_URL + '/mensaje');
    const datos = await r.json();
    console.log(datos);
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <Text>Mi primera conexión</Text>
      <Button title="CARGAR MENSAJE" onPress={cargarMensaje} />
    </SafeAreaView>
  );
}
