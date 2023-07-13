import "./App.css";
import ContactHeader from "./component/contact/ContactHeader";
import Navigation from "./component/navigation/Navigation";
import ContactFrom from './component/contactForm/ContactFrom';


function App() {

  return (
    <>
    <Navigation/>
    <div className="main_container">

    <ContactHeader/>
    <ContactFrom />
    
    </div>
    </>
  )
}

export default App