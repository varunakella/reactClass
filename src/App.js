
import './App.css';
import CustomButton from "./components/function-component/button"
import ButtonComponent from './components/class-component/button'
import ContactInfo from "./components/class-component/contact"
import Image from "./components/function-component/image"
import CustomImage from "./components/class-component/Image"
function App() {
  return (
    <div>
 <CustomButton/>
   <ButtonComponent/>
   <ContactInfo/> 
   <Image/>/
   <CustomImage></CustomImage>
   </div>
  );
}

export default App;

// 1. default --> default export can be called with any name
// 2. named--> named export ca be called with {function name} in {}