import { createContext, useState } from 'react'
import { getRequest } from '../services/httpRequests'

export const Context = createContext()

const ContexProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [categories, SetCategories] = useState([])
    const [categoryProd, setCategoryProd] = useState([])
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || "")
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [name, setName] = useState("")

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
        localStorage.setItem('cart', JSON.stringify([value, ...cart]))
    }

    const borrarCart = () => {
        setCart([])
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
    
    const saveToken = (token) => {
        setToken(token)
        localStorage.setItem('token', JSON.stringify(token))
    }

    const saveName = (name) => {
        setName(name)
    }


    return (
        <Context.Provider value={{ products, getAllProducts, categories, getAllCategories, categoryProd, getProductsFromCategory, getProductByID, product, addCart, cart, updateCartItem, calculateCartTotal, borrarCart, saveToken,token,isLoginOpen, setIsLoginOpen, isRegisterOpen, setIsRegisterOpen, saveName,name }}>
            {children}
        </Context.Provider>
    )
}

export default ContexProvider