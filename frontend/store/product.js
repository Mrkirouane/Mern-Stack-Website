import { create } from "zustand";
import { CreateProduct } from "../../backend/controllers/product.controller";

export const useProductStore = create ((set)  => ({
    products: [],
    setProducts: (products)  => set ({ products }),

    createProduct: async (newProduct)  => {
        
    }

}));