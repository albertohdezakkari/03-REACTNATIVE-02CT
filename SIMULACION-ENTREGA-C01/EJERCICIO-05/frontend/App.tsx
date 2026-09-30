import { Button,SafeAreaView } from 'react-native';
const API_URL='http://192.168.1.50:3000';
export default function App(){
 async function cargarMensaje(){const r=await fetch(API_URL+'/mensaje');console.log(await r.json());}
 return <SafeAreaView><Button title="CARGAR MENSAJE" onPress={cargarMensaje}/></SafeAreaView>;
}