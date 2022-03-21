import { Toolbar, Typography, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';


const BasicNavbar = (props) => {

    return (
        <AppBar>
            <Container maxWidth="lg">
                <Toolbar sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h3' >{props.title}</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default BasicNavbar