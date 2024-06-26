import { Avatar, Box, Button, Container, Rating, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { usejobdetail } from "~/hooks/jobdetail-hook"
import styles from './jobDetail.module.scss'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FAQ from "../FAQ";
import Comment from "../Get-Comment";

export default function JobDetails({ props }: any) {

  const { data, isLoading, error } = usejobdetail(props)

  if (isLoading) {
    return <div>Loading data...</div>
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>
  };

  console.log(props)
  return (
    <Container className={styles.containerContent} style={{ display: 'flex' }}>
      <Box className={styles.contentLeft}>
        {/* <h5>{data &&  data.tenLoaiCongViec } - { data && data.tenNhomChiTietLoai} - { data && data.tenChiTietLoai}</h5> */}
        {data && data.length > 0 &&
          data.map((dataItem: any) => (
            <>
              <h6>{dataItem.tenLoaiCongViec} - {dataItem.tenNhomChiTietLoai} - {dataItem.tenChiTietLoai}</h6>
              <h5>{dataItem.congViec.tenCongViec}</h5>
              <Box style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }} >
                <Avatar
                  style={{ marginRight: '10px' }}
                  alt="User Name"
                  src={dataItem.avatar}
                />
                <p
                  style={{ fontSize: '14px', fontWeight: 'bold' }}
                >
                  {dataItem.tenNguoiTao}
                </p>
                <Rating
                  name="half-rating-read"
                  defaultValue={dataItem.congViec.saoCongViec}
                  precision={0.5}
                  readOnly
                />
                <span>
                  ({dataItem.congViec.danhGia})
                </span>
              </Box>
              <Box className={styles.buyers}>
                <ShoppingBagIcon style={{ marginRight: '10px' }} />
                <span style={{ marginRight: '10px', fontWeight: '600' }}>Buyers keep returning!</span>
                <span>nofilrazzaq has an exceptional number of repeat buyers.</span>
              </Box>
              <Box>
                <img style={{ width: '100%', margin: '40px 0' }} src={dataItem.congViec.hinhAnh} />
              </Box>
              <Box>
                <p>{dataItem.congViec.moTa}</p>
              </Box>
              <Box className={styles.seller}>
                <h3>About The Seller</h3>
                <Box className={styles.contentSeller}>
                  <Avatar
                    style={{ marginRight: '10px', width: '20vh', height: '20vh' }}
                    alt="User Name"
                    src={dataItem.avatar}
                  />
                  <Box>
                    <p
                      style={{ fontSize: '4vh', fontWeight: '600' }}
                    >
                      {dataItem.tenNguoiTao}
                    </p>
                    <Box className={styles.rating}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={dataItem.congViec.saoCongViec}
                        precision={0.5}
                        readOnly
                      />
                      <span>
                        ({dataItem.congViec.danhGia})
                      </span>
                    </Box>
                    <Button variant="outlined">Contact Me</Button>
                  </Box>
                </Box>
              </Box>
            </>
          ))}
        <FAQ />
        <Comment props={props}/>
      </Box>
      <Box className={styles.contentRight}>
        <Box className={styles.boxAbove}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: '#dcdce0', fontWeight: 'bold', borderRight: '1px solid #c7c7d1' }} align="center">Basic</TableCell>
                <TableCell style={{ fontWeight: 'bold', color: '#faaf00', borderBottom: '5px solid #faaf00' }} align="center">Standard</TableCell>
                <TableCell style={{ backgroundColor: '#dcdce0', fontWeight: 'bold', borderLeft: '1px solid #c7c7d1' }} align="center">Premium</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h5>Standard</h5>
                    {data && data.map((item: any) => (
                      <h5>${item.congViec.giaTien}</h5>
                    ))}
                  </Box>
                  <p style={{ margin: '3vh 0' }}>Create a simple web application for your business.</p>
                  <Box>
                    {data && data.map((item: any) => (
                      <p>{item.congViec.moTaNgan}</p>
                    ))}
                  </Box>
                  

                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        <Box textAlign='center'  >
            <h5 style={{ margin: '3vh 0' }}>Do you have any special requirements?</h5>
            <Button style={{ marginBottom: '3vh' }} color="inherit" variant="outlined">Get a Quote</Button>
        </Box>
      </Box>
    </Container>
  )
}


