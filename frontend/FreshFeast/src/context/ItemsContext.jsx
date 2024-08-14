
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
//import { food_list } from '../assets/food del assets/frontend_assets/assets'; // Adjust the import path if necessary

const DataContext = createContext(null);

const ItemsContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])

    const url = "http://localhost:4000";

    const addtoCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }


        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }

    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } else {
                const { [itemId]: _, ...rest } = prev;
                return rest;
            }
        });

        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }


    };

    const totalAmount = () => {
        return Object.keys(cartItems).reduce((amount, id) => {
            const item = food_list.find((product) => product._id === id);
            return item ? amount + item.price * cartItems[id] : amount;
        }, 0);
    };


    const fetchFoodList = async () => {
        const responce = await axios.get(url + "/api/food/list")
        setFoodList(responce.data.data)
    }

    const loadCartData = async (token) => {
        const responce = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
        setCartItems(responce.data.cartData)
    }


    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(localStorage.getItem("token"))
            }
        }

        loadData();

    }, []);

     
    const data = {
        food_list,
        cartItems,
        setCartItems,
        addtoCart,
        removeFromCart,
        totalAmount,
        url,
        token,
        setToken,
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, ItemsContextProvider };






