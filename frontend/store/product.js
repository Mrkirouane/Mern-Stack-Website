import { create } from "zustand";


export const useProductStore = create((set)  => ({
    products: [],

    setProducts: (products)  => set ({ products }),
    
    createProduct: async (newProduct)  => {
        if( !newProduct || !newProduct.image || !newProduct.price) {
            return { success:false, message:"Please fill in all fields." };
        }
        const res = await fetch("/api/products", {
            method:"Post",
            headers: {
            "content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
         const data = await res.json();
         set ((state)   => ({ products: [...state.products, data.data] }));
         return { success: true, message:"Product created Successfully" };
    },

fetchProducts: async () => {
    const res = await fetch("/api/products")
    const data = await res.json();
    set({ Products: data.data  });
}


}));