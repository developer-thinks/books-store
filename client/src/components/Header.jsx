import {Card, CardContent, Typography, Grid, AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const Header = ()=>{
    return(
        <div className="root">
      <AppBar color='transparent' position="static">
        <Toolbar className='header_content'>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            Samsquare
          </Typography>
          <div>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    )
}

export default Header;