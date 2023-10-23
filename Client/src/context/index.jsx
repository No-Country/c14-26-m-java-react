import { createContext, useState } from 'react'
import { getRequest } from '../services/httpRequests'

export const Context = createContext()

const ContexProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [categories, SetCategories] = useState([])
    const [categoryProd, setCategoryProd] = useState([])

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




    return (
        <Context.Provider value={{ products, getAllProducts, categories, getAllCategories, categoryProd, getProductsFromCategory, getProductByID, product }}>
            {children}
        </Context.Provider>
    )
}

export default ContexProvider