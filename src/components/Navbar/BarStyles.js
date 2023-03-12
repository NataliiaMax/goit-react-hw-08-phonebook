import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBarStyles() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography  variant="h6" component='span' sx={{flexGrow:1}}>

                </Typography>
            </Toolbar>

        </AppBar>
    )
}

export default NavBarStyles