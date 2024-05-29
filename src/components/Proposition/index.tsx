import { Box, Container, Typography } from '@mui/material'
import styles from './Proposition.module.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function index() {
  return (
    <Container className={styles.propositionContainer}>
      <Box className={styles.leftContainer}>
        <Typography variant='h4'>

        </Typography>
        <Box className={styles.leftContentCheckpoint}>
          <Box className={styles.checkpointTitle}>
            <CheckCircleOutlineIcon />
            <Typography variant='h5'>
              The best for every widget
            </Typography>
          </Box>
          <Box className={styles.checkpointContent}>
            <Typography variant='body1'>
              
            </Typography>
          </Box>
        </Box>

      </Box>
      <Box className={styles.rightContainer}>

      </Box>
    </Container>
  )
}
