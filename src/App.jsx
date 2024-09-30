import React from 'react' 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Quiz from './componets/Quiz/Quiz'
import Home from './componets/Home/Home'
import Footer from './componets/Footer/footer'

const App = () => {
  return (
    <>

    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/quiz" element={<Quiz />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App