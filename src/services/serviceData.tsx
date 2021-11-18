import { Item } from '../types/Item';

export const getItems = (): Promise<Array<Item>> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(
      [
        { id: 1, title: 'Producto 1', description: 'Detalles del producto 1', price: 1000, pictureUrl: '', stock: 20 },
        { id: 2, title: 'Producto 2', description: 'Detalles del producto 2', price: 1000, pictureUrl: '', stock: 0 },
        { id: 3, title: 'Producto 3', description: 'Detalles del producto 3', price: 1000, pictureUrl: '', stock: 5 },
        { id: 4, title: 'Producto 4', description: 'Detalles del producto 4', price: 1000, pictureUrl: '', stock: 1 }
      ]
    ), 2000)
  })
}