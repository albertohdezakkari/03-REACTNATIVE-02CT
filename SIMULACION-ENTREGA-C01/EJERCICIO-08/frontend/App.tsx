import { useEffect,useState } from 'react'; import { FlatList,Text,View } from 'react-native';
const API_URL='http://192.168.1.50:3000'; export default function App(){const [productos,setProductos]=useState<any[]>([]);
useEffect(()=>{fetch(API_URL+'/productos').then(r=>r.json()).then(setProductos)},[]);
return <FlatList data={productos} keyExtractor={x=>String(x.id)} renderItem={({item})=><View><Text>{item.emoji} {item.nombre} · {item.precio} €</Text></View>}/>;}