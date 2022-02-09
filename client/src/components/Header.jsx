import {Card, CardContent, Typography, Grid, AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom'

const Header = ()=>{
    return(
        <div className="root">
      <AppBar color='transparent' position="static">
        <Toolbar className='header_content'>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none', color:'white'}}>
          <Typography variant="h6" className="title">
             <h4> &lt; Samsquare &#47;&gt; </h4>
          </Typography>
          </Link>
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