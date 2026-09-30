import { useState } from 'react'; import { Button,Text,View } from 'react-native';
const API_URL='http://192.168.1.50:3000';
export default function App(){const [mensaje,setMensaje]=useState('Sin conectar');const [ok,setOk]=useState(false);
async function cargar(){const r=await fetch(API_URL+'/mensaje');const d=await r.json();setMensaje(d.texto);setOk(true);}
return <View><Text>{ok?'🟢':'🔴'} {mensaje}</Text><Button title="CONECTAR" onPress={cargar}/></View>;}