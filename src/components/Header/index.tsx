import { Box, Button, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import FiverrLogo from '~/assets/Fiverr Logo.png';
import styles from './Header.module.scss';


export default function Header() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters className={styles.headerContainer} maxWidth="xl">
        <Container maxWidth="lg">
          <Box className={styles.navBar}>
            <Box className={styles.navBarLeft}>
              <img src={FiverrLogo} alt="Fiverr Logo" className={styles.fiverrLogo} />
            </Box>
            <Box>
              <Box className={styles.navBarRight}>
                <Button>
                  Become a seller
                </Button>
                <Button>
                  Sign In
                </Button>
                <Button variant='outlined' color='inherit'>
                  Join
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}
