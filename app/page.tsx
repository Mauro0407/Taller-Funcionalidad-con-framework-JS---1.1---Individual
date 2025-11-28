import Image from "next/image"; 
import ProductTable from "./components/ProductTable";
 
export default function Home() { 
  return ( 
    <main> 
      Hello There 
      <img 
src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHE0YnUyNDF4OHdvYTYwaXh2eW9wOTBpemExZmthemk4NTh4Y3ljZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif" /> 
 <ProductTable/> 
    </main> 
  ); 
} 