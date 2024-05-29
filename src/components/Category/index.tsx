// import { Box, Grid, styled } from "@mui/material";
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import { Container } from '@mui/material';
import styles from './Category.module.scss';
import { Carousel } from 'antd';


const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


export default function Category() {
    return (
        <>
            <Container disableGutters className={styles.cateContainer} maxWidth="xl">
                <Container maxWidth="lg">
                    <Carousel style={contentStyle} arrows infinite={false}>
                        <Box className={styles.itemCarousel} >
                            <Box className={styles.itemLeft}>
                                <iframe width="auto" height={355} src="https://www.youtube.com/embed/232zXeq0bts" title="Người Việt đầu tiên tìm thấy BỘ LẠC ĂN THỊT NGƯỜI trong rừng Papua  - Cảnh sát theo dõi 24/24" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

                            </Box>
                            <Box className={styles.itemRight}>
                                <Box className={styles.author}> Kay Kim, Co-Founder | <label className={styles.rooter}> Rooter</label> </Box>
                                <Box className={styles.text}> "It's extremely exciting that Diverr has freelancers from all over the woeld - it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working." </Box>
                            </Box>
                        </Box>
                        <div>
                            <h1 >2</h1>
                        </div>
                        <div>
                            <h3 >3</h3>
                        </div>
                        <div>
                            <h3 >4</h3>
                        </div>
                    </Carousel>

                    <h1>Explore the marketplace</h1>

                    <Box sx={{ width: '100%' }}>
                        <Grid container className={styles.categories} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Graphics & Design
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Digital Marketing
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-file-pen"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Writing & Translation
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-film"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Video & Animation
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-film"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Music & Audio
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-regular fa-file-code"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Programming & Tech
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-handshake"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Business
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-mug-hot"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Lifestyle
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid xs={12 / 5}>
                                <Item className={styles.item}>
                                    <Box className={styles.icon} >
                                        <i className="fa-solid fa-newspaper"></i>
                                    </Box>
                                    <Box className={styles.text}>
                                        Data
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Box className={styles.endLine}></Box>
            </Container >

        </>
    )
}
