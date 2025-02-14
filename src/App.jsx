import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import ReferralForm from "./components/ReferralForm";
function App() { 
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      {modalOpen && <ReferralForm onClose={() => setModalOpen(false)} />}
      <LandingPage setModalOpen={setModalOpen}/>

    </>
  )
}

export default App
