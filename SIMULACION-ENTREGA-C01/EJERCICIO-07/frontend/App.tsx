import { useEffect,useState } from 'react'; import { Button,Text,View } from 'react-native';
const API_URL='http://192.168.1.50:3000';
export default function App(){const [mensaje,setMensaje]=useState('');const [cargando,setCargando]=useState(true);
async function cargar(){setCargando(true);const r=await fetch(API_URL+'/mensaje');const d=await r.json();setMensaje(d.texto);setCargando(false);}
useEffect(()=>{cargar();},[]);
return <View><Text>{cargando?'Cargando…':mensaje}</Text><Button title="RECARGAR" onPress={cargar}/></View>;}