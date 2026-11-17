import { createContext, useContext, useState } from "react";

let Context = createContext(null);

export default function ContextProvider({ children }) {

    let [categories, setCategories] = useState([])
    let [selectedCategory, setSelectedCategory] = useState("movies")

    return (
        <Context value={{ categories, setCategories, selectedCategory, setSelectedCategory }}>
            {children}
        </Context>
    )
}

const useCategoriesContext = () => {
    let { categories } = useContext(Context)
    return categories
}

const useSetCategoriesContext = () => {
    let { setCategories } = useContext(Context)
    return setCategories
}

const useSelectedCategory = () => {
    let { selectedCategory } = useContext(Context)
    return selectedCategory
}

const useSetSelectedCategory = () => {
    let { setSelectedCategory } = useContext(Context)
    return setSelectedCategory
}

export { useCategoriesContext as useCatogoriesContext, useSetCategoriesContext as useSetCatogoriesContext, useSelectedCategory, useSetSelectedCategory }