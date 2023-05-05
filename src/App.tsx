import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Button, colors, Container, Grid, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import { PlusCircle, Rocket } from '@phosphor-icons/react';
import Placeholder from '@phosphor-icons/react/dist/icons/Placeholder';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          '@media all': {
            minHeight: 200,
          }

        }}>
          <Typography variant="h5" component="h1" sx={{
            display: "flex",
            alignItems: 'center',
          }}><Rocket size={32} /><span> todo</span></Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{
          position: 'relative',

        }}>
          <Grid container spacing={theme.spacing(0.5)} sx={{
            position: 'absolute',
            top: '-27px',
          }}>
            <Grid item xl={10} sm={12}>
              <TextField variant='outlined' name='task' fullWidth sx={{
                backgroundColor: colors.grey[800]
                
                }}>

              </TextField>
            </Grid>
            <Grid item xl={2} sm={12}>
              <Button variant='contained' sx={{
                height: '100%'
              }}><span>Criar</span><PlusCircle size={32} />

              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={theme.spacing(1)} >
              <Grid item>
                <Typography variant="caption" sx={{
                  display: 'flex',
                  alignItems: "center"
                }}>
                <Badge color='primary' badgeContent={0} showZero/>
                  <span>Tarefas Criadas</span>

                </Typography>
              </Grid>
          </Grid>
        </Container>
      </main>

    </ThemeProvider>
  );
}


export default App
