import express from "express";

import { CreateProduct, deleteProduct, getProducts, UpdateProduct } from "../controllers/product.controller.js";























const router = express.Router();




    router.get("/", getProducts);
    
    
    router.post("/", CreateProduct);
    
    
    router.put( "/:id", UpdateProduct)
    
    
    
    router.delete("/:id", deleteProduct);



export default router;