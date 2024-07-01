import { Box, Button, Container, InputAdornment, TextField, Typography } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import FiverrLogo from '~/assets/Fiverr Logo.png'
import FacebookLogo from '~/assets/FacebookLogo.png'
import GoogleLogo from '~/assets/GoogleLogo.png'
import NetflixLogo from '~/assets/NetflixLogo.png'
import PaypalLogo from '~/assets/PaypalLogo.png'
import PnGLogo from '~/assets/PnGLogo.png'
import styles from './Header.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import { useUserStore } from '~/store/user-store'

export default function Header() {
  const user = useUserStore((state) => state.user);
  const removeUser = useUserStore((state) => state.removeUser);
  const handleSignOut = async () => {
    try {
      removeUser();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container className={styles.headerContainer} maxWidth={false}>

        <Container maxWidth="lg">
          <Box className={styles.navBar}>
            <Box className={styles.navBarLeft}>
              <img src={FiverrLogo} alt="Fiverr Logo" className={styles.fiverrLogo} />
            </Box>
            <Box>
              {user ?
                <Box className={styles.navBarRight}>
                  <Button>
                    Welcome
                  </Button>
                  <Button>
                    {user.name}
                  </Button>
                  <Button variant='outlined' color='inherit' onClick={handleSignOut}>
                    Sign out
                  </Button>
                </Box> :
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
              }
            </Box>
          </Box>
          <Box className={styles.mainHeader}>

            <Box className={styles.mainHeaderLeft}>
              <Box className={styles.slogan}>
                <Typography variant='h3' sx={{ fontWeight: 'bold', color: 'white' }}>
                  Find the perfect <span style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>freelance</span> service for your business
                </Typography>
              </Box>
              <Box className={styles.searchBar}>
                <TextField
                  variant='standard'
                  className={styles.searchInput}
                  size='small'
                  fullWidth={true}
                  placeholder="Try everything - Shakira"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon></SearchIcon></InputAdornment>,
                    disableUnderline: true,
                    style: { paddingTop: '0.2vh', marginLeft: '1vw', height: '100%', display: 'flex', alignItems: 'center' }
                  }}
                />
                <Button className={styles.searchButton} variant="contained" disableElevation={true}>Search</Button>
              </Box>
              <Box className={styles.popularTag}>
                <Typography variant='subtitle2' sx={{ fontWeight: 'bold', color: 'white' }}>
                  Popular:
                </Typography>
                <Button className={styles.tagButton} variant='outlined' color='inherit'>
                  Website Design
                </Button>
                <Button className={styles.tagButton} variant='outlined' color='inherit'>
                  WordPress
                </Button>
                <Button className={styles.tagButton} variant='outlined' color='inherit'>
                  Logo Design
                </Button>
                <Button className={styles.tagButton} variant='outlined' color='inherit'>
                  Dropshipping
                </Button>
              </Box>
            </Box>

            <Box className={styles.mainHeaderRight}></Box>
          </Box>
        </Container>

        <Box className={styles.reviewInfo}>
          <Box className={styles.reviewStar}>
            <StarRateRoundedIcon fontSize='small' sx={{ color: 'yellow', marginLeft: 0 }} />
            <StarRateRoundedIcon fontSize='small' sx={{ color: 'yellow' }} />
            <StarRateRoundedIcon fontSize='small' sx={{ color: 'yellow' }} />
            <StarRateRoundedIcon fontSize='small' sx={{ color: 'yellow' }} />
            <StarRateRoundedIcon fontSize='small' sx={{ color: 'yellow' }} />
          </Box>
          <Box className={styles.reviewName} paddingLeft={'0.2vw'}>
            <Typography variant='subtitle1' sx={{ color: 'white' }}>
              Grabrielle, <span style={{ fontWeight: 'bold' }}>Video Editor</span>
            </Typography>
          </Box>
        </Box>

      </Container>
      <Box className={styles.trustedBy}>
        <span style={{ paddingBottom: '0.5vh', fontWeight: 'bold', color: 'grey' }}>Trusted by:</span>
        <span><img src={FacebookLogo} alt="" /></span>
        <span><img src={GoogleLogo} alt="" /></span>
        <span style={{ margin: '0 2vw' }}><img src={NetflixLogo} style={{ width: '130%' }} alt="" /></span>
        <span style={{ margin: '0 4vw' }}><img src={PnGLogo} style={{ width: '130%', }} alt="" /></span>
        <span><img src={PaypalLogo} alt="" /></span>
      </Box>
    </>
  );
}
