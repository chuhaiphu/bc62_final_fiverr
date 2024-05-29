

import { Box, Container } from '@mui/material';
import styles from './Footer.module.scss';
import FiverrLogo from "~/assets/Fiverr Logo.png";


export default function Footer() {
    return (

        <Container disableGutters className={styles.footerContainer} maxWidth="xl">
            <Container maxWidth="lg">
                <Box className={styles.navBar}>
                    <Box>
                        <h2>Categories</h2>
                        <div>  Digital Marketing</div>
                        <div> Writing & Translation </div>
                        <div> Video & Animation </div>
                        <div> Music & Audio </div>
                        <div> Programming  & Tech </div>
                        <div>Data </div>
                        <div>Business </div>
                        <div>Lifestyle</div>
                        <div>Sitemap</div>
                    </Box>
                    <Box>
                        <h2>About</h2>
                        <div>Careers </div>
                        <div>Press & News </div>
                        <div>Partnerships </div>
                        <div>Privacy Policy </div>
                        <div>Terms of Service </div>
                        <div>Intellectual Property Claims </div>
                        <div>Investor Relations </div>
                    </Box>
                    <Box>
                        <h2>Support</h2>
                        <div>Help & Support</div>
                        <div>Trust & Safety</div>
                        <div>Selling in Fiverr</div>
                        <div>Buying om Fiverr</div>
                    </Box>
                    <Box>
                        <h2>Community</h2>
                        <div>Event</div>
                        <div>Blog</div>
                        <div>Forum</div>
                        <div>Community Standard</div>
                        <div>Podcast</div>
                        <div>Affiliates</div>
                        <div>Invita a Friend</div>
                        <div>Become a Seller</div>
                        <div>
                            Diverr Elevate
                            <p> Exclusuve Benefits</p>
                        </div>
                    </Box>
                    <Box>
                        <h2>More From Fiverr</h2>
                        <div>Fiverr Business</div>
                        <div>Fiverr Pro</div>
                        <div>Fiverr Studios</div>
                        <div>Fiverr Logo Maker</div>
                        <div>Fiverr Guides</div>
                        <div>Get Inspired</div>
                        <div>
                            ClearVoice
                            <p>Content Marketing</p>
                        </div>
                        <div>
                            AND CO
                            <p>Invoice Software</p>
                        </div>
                        <div>
                            Learn
                            <p>Online Courses</p>
                        </div>
                    </Box>
                </Box>
                <div className={styles.horizontalLine}></div>
                <Box className={styles.footer}>
                    <Box className={styles.footerLeft} >
                        <img src={FiverrLogo} alt="Fiverr Logo" className={styles.fiverrLogo} />
                        <Box className='footerText'> @Fiverr International Ltd. 2021</Box>
                    </Box>
                    <Box className={styles.footerRight} >
                        <Box className={styles.iconContact}>
                            <i className="fab fa-twitter" />
                            <i className="fab fa-facebook" />
                            <i className="fab fa-invision" />
                            <i className="fab fa-pinterest" />
                            <i className="fab fa-instagram" />
                        </Box>
                        <Box className={styles.iconText}>
                            <i className="fa fa-globe"> English </i>
                            <i className="fa fa-dollar-sign"> USD </i>
                            <i className="fa fa-street-view"></i>
                        </Box>


                    </Box>

                </Box>
            </Container>
            <Box className={styles.endLine}></Box>
        </Container>

    )
}
