import { createContext, useState } from 'react'
import { getRequest } from '../services/httpRequests'

export const Context = createContext()

const ContexProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [categories, SetCategories] = useState([])
    const [categoryProd, setCategoryProd] = useState([])
    const [cart, setCart] = useState([])

    const getAllProducts = async () => {
        const productsAll = await getRequest('/products')
        setProducts(productsAll)
    }

    const getProductByID = async (id) => {
        const productsByID = await getRequest(`/products/${id}`)
        setProduct(productsByID)
    }

    const getAllCategories = async () => {
        const categoriesAll = await getRequest('/products/categories')
        SetCategories(categoriesAll)
    }

    const getProductsFromCategory = async (category) => {
        const productsCategory = await getRequest(`/products/category/${category}`)
        setCategoryProd(productsCategory)
    }

    const addCart = (value) => {
        setCart([value, ...cart])
    }

    const updateCartItem = (productId, increment) => {
        const updatedCart = cart.map(item => {
          if (item.id === productId) {
            return { ...item, cantidad: item.cantidad + increment };
          }
          return item;
        });
      
        setCart(updatedCart);
    };

    const calculateCartTotal = () => {
        let total = 0;
      
        cart.forEach(item => {
          const subtotal = item.price * item.cantidad;
          total += subtotal;
        });
      
        return total;
      };


    return (
        <Context.Provider value={{ products, getAllProducts, categories, getAllCategories, categoryProd, getProductsFromCategory, getProductByID, product, addCart, cart, updateCartItem, calculateCartTotal}}>
            {children}
        </Context.Provider>
    )
}

export default ContexProvider