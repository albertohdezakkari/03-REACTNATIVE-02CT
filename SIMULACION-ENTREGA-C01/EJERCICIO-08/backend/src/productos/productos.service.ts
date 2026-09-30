@Injectable() export class ProductosService{private productos=[
{id:1,nombre:'Pizza',precio:9,emoji:'🍕'},{id:2,nombre:'Pasta',precio:10,emoji:'🍝'},
{id:3,nombre:'Ensalada',precio:8,emoji:'🥗'},{id:4,nombre:'Tarta',precio:6,emoji:'🍰'}];findAll(){return this.productos;}}