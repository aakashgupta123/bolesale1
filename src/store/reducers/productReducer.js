const initState={
    products:[
        {id:'1',name:'Mobile',category:"",price:"10000",content:"Lava,Samsung,Iphone,Mi"},
        {id:'2',name:'Mobile',category:"",price:"10000",content:"Lava,Samsung,Iphone,Mi"},
        {id:'3',name:'Mobile',category:"",price:"10000",content:"Lava,Samsung,Iphone,Mi"}
    ]
}

const productReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PRODUCT':
            console.log('created product',action.product)
            return state;
        case'CREATE_PRODUCT_ERROR':    
            console.log('creat project error',action.err)
            return state;
        case'UPDATE_PRODUCT':    
            console.log('Update project',action.product)
            return state;
        case'UPDATE_PRODUCT_ERROR':    
            console.log('update project error',action.err)
            return state;
        case "DELETE_PRODUCT":
            console.log('Product Deleted')
            return state;
        case "DELETE_PRODUCT_ERROR":
            console.log('Product Delete Error',action.err)
            return state;
                
        default:
            return state;    
    }
    
}
export default productReducer