import { createContext, useContext, useState } from "react";

let Context = createContext(null);

export default function ContextProvider({ children }) {

    let [categories, setCategories] = useState([])

    return (
        <Context value={{ categories, setCategories }}>
            {children}
        </Context>
    )
}

const useCatogoriesContext = () => {
    let { categories } = useContext(Context)
    return categories
}

const useSetCatogoriesContext = () => {
    let { setCategories } = useContext(Context)
    return setCategories
}

export { useCatogoriesContext, useSetCatogoriesContext }