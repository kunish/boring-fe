import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Boring FE
        </Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  )
}
