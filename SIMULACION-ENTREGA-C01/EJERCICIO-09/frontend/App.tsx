import { useState } from 'react'; import { Button,Text,TextInput,View } from 'react-native';
const API_URL='http://192.168.1.50:3000'; export default function App(){const [id,setId]=useState('1');const [heroe,setHeroe]=useState<any>(null);
async function buscar(){const r=await fetch(API_URL+'/heroes/'+id);setHeroe(await r.json());}
return <View><TextInput value={id} onChangeText={setId}/><Button title="BUSCAR" onPress={buscar}/>{heroe&&<Text>{heroe.nombre} · {heroe.poder} · {heroe.universo}</Text>}</View>;}