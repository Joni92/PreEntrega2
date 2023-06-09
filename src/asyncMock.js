
const products = [
    { id: 1, name: 'Iphone 12', price: 1000, category: 'celular', img: 'https://www.compumar.com/images/000000000001351336713IPHONE-14-PRO-MAX.png', stock: 25, description: 'Description' },
    { id: 2, name: 'Iphone 13', price: 2000, category: 'tablet', img: 'https://www.compumar.com/images/000000000001351336713IPHONE-14-PRO-MAX.png', stock: 6, description: 'Description' },
    { id: 3, name: 'Iphone 14', price: 3000, category: 'notebook', img: 'https://www.compumar.com/images/000000000001351336713IPHONE-14-PRO-MAX.png', stock: 0, description: 'Description' }
]

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products)
    },500)
  })
} 


export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    },500);
  })
}
