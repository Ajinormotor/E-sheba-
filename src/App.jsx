
import './App.css'
import Footer from './component/ui/Footer'
import Header from './component/ui/Header'
import Routs from './routing/routs'


function App() {


  return (
    <div className='flex flex-col  overflow-x-hidden'>
      <Header />
    <Routs />
 <Footer />
     
    </div>
  )
}

export default App
