export const createProduct=(product)=>{
return(dispatch,getState,{getFirebase,getFirestore})=>{
const firestore=getFirestore();
console.log(product)

firestore.collection('products').add({
    ...product,
    sellerFirstName:'aakash',
    sellerLastName:'gupta',
    
}).then(()=>{   
    dispatch({type:'CREATE_PRODUCT',product})
})
.catch((err)=>{
    
    dispatch({type:'CREATE_PRODUCT_ERROR',err})
})  
 }
}   