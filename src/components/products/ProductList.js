import React,{useState} from 'react';
import  '../../App.css';
import ProductSummary from './ProductSummary'
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import ItemsCarousel from 'react-items-carousel';
const ProductList=({products})=>{
  const [activeItemIndex, setActiveItemIndex] = useState(0);
      const chevronWidth = 40;
    
      return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
         <p className="pc" >Mobile and Accessories</p>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="mobile_accessories"){

            return (<p to={"/product/" + product.id}  key={product.id}>
                               <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
              </Link> */}
            </p> )
            }}
            )
          }
          </ItemsCarousel> <p className="pc">Clothing</p>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            { products && products.map(product=>{
            if (product.category=="clothing"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Footwear</p>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="footwear"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Stationary</p>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="stationery"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Essentials eg masks,sanitizers</p>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="essentials"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Toys</p>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="toys"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Kitchenware</p>


          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="kitchenware"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Home Decor</p>


          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="home_decor"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel> <p className="pc">Sports Goods</p>

          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={20}
            leftChevron={<button>{'<'}</button>}
            rightChevron={<button>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >

{ products && products.map(product=>{
            if (product.category=="sports_goods"){
              return (<p to={"/product/" + product.id}  key={product.id}>
              <ProductSummary product={product}/>

{/* <Link to={"/product/" + product.id}style={{ color: 'inherit', textDecoration: 'inherit'}}  key={product.id}>
</Link> */}
</p> )
}}
)
          }
          </ItemsCarousel>
          
          
        </div>
      );
        
}
export default ProductList




