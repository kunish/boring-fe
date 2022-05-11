import '@/App.css'
import AppBar from '@/components/AppBar'
import HomePage from '@/pages/Home'
import MgmtPage from '@/pages/Mgmt'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <AppBar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kunish" element={<MgmtPage />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App
