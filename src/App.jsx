import Divider from "./components/Divider";
import Header from "./sections/Header";
import Welcome from "./sections/Welcome";

export default function App(){

  return(
    <div className="bg-black m-0">
      <Header />
      <Welcome />
      <Divider />
      
    </div>
    
  )
}