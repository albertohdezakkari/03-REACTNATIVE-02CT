import { useState } from 'react';import { Button,TextInput,View } from 'react-native';const API_URL='http://192.168.1.50:3000';
export default function App(){const [nombre,setNombre]=useState('');const [precio,setPrecio]=useState('');
async function crear(){await fetch(API_URL+'/productos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({nombre,precio:Number(precio)})});}
return <View><TextInput value={nombre} onChangeText={setNombre}/><TextInput value={precio} onChangeText={setPrecio}/><Button title="AÑADIR" onPress={crear}/></View>;}