import Container from '@mui/material/Container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from '@/pages/Home'
import MgmtPage from '@/pages/Mgmt'

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kunish" element={<MgmtPage />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
