const fs =require('fs');
const path =require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
  );


module.exports =class Cart{
    static addProduct(id,productPrice){
        fs.readFile(p,(err,fileContent)=>{
            let cart ={product:[], totalPrice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }
            const exitingProductIndex =cart.products.find(prod=> prod.id===id);
            const exitingProduct =cart.products[exitingProductIndex];
            let UpdatedProduct;
            if (exitingProduct){
                UpdatedProduct={ ...exitingProduct};
                UpdatedProduct.qty =UpdatedProduct.qyt+1;
                cart.products=[...cart.products]; 
                cart.products[exitingProductIndex]= UpdatedProduct;



            }
            else{
                UpdatedProduct={ id:id, qty:1};  
                cart.products =[...cart.products,UpdatedProduct];    
            }
           cart.totalPrice = cart.totalPrice + + productPrice;
           fs.writeFile(p, JSON.stringify(cart),err=>{
               console.log(err);
           })
           
    })

    }

}
