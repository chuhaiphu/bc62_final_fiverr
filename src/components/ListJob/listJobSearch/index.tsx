import { CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import { Box,  Link } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import { uselistjobsearch } from "~/hooks/listJobSearch-hook";
import styles from './listJobSearch.module.scss';


export default function ListJobSearch(props: any) {
    const formattedText = props.tenCV.replace(/ /g, '%20');
    const { data, isLoading, error } = uselistjobsearch(formattedText)

    if (isLoading) {
        return <div>Loading data...</div>
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>
    };
    
  return (
    <>
      {data &&
                data.map((dataItem: any) => (
                    <Card sx={{ maxWidth: 300 }}>
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
  )
}
