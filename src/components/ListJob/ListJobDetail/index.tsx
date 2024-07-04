import { Box, Container, Link } from "@mui/material"
import { uselistjobdetail } from "~/hooks/listJobDetail-hook"
import styles from './Listjobdetail.module.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from "react-router-dom";
import ListJobSearch from "../listJobSearch";

export default function ListJobDetail({ props }: any) {

    const { id } = useParams();

    const { data, isLoading, error } = uselistjobdetail(props)

    if (isLoading) {
        return <div>Loading data...</div>
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>
    };

    return (
        <Container className={styles.listJobDetail}>

            {id && <ListJobSearch tenCV={id} />}

            {props && 
                <>
                    <ListJobSearch tenCV={'-1'} />

                    {data &&
                        data.map((dataItem: any) => (
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 200, width: 300 }}
                                    image={dataItem.congViec.hinhAnh}
                                    title="green iguana"
                                />
                                <Box display="flex" alignItems="center"  >
                                    <Avatar style={{ marginRight: '10px' }} alt="User Name" src={dataItem.avatar} />
                                    <h6>{dataItem.tenNguoiTao} </h6>
                                </Box>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {dataItem.congViec.tenCongViec}
                                        <Box display="flex" alignItems="center">
                                            <Rating name="half-rating-read" defaultValue={dataItem.congViec.saoCongViec} precision={0.5} readOnly />
                                            ({dataItem.congViec.danhGia})
                                        </Box>
                                        <Box className={styles.starting}>
                                            <FavoriteIcon />
                                            <Link> STARTING AT ${dataItem.congViec.giaTien}</Link>
                                        </Box>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                </>
            }
        </Container>
    )
}
