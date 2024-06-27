import { Box, Container } from "@mui/material"
import { uselistjobtypejobdetail } from "~/hooks/listJob-typejob-hook"
import styles from './Jobdetail.module.scss'

export default function Jobdetail({ props }: any) {
   
    const { data, isLoading, error } = uselistjobtypejobdetail(props)

    if (isLoading) {
        return <div>Loading data...</div>
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>
    };
   
    return (
        <Container>
            {data.map((dataItem: any) => (
                <>
                    <h2 className={styles.h2}  key={dataItem.id}> Explore {dataItem.tenLoaiCongViec} </h2>
                    <Box className={styles.flex} >
                        {dataItem.dsNhomChiTietLoai.map((item: any) => (
                            <Box>
                                <img className={styles.img} src={item.hinhAnh}></img>
                                <h4 className={styles.h4}>{item.tenNhom}</h4>  
                                {item.dsChiTietLoai.map((items: any) => (
                                  <p className={styles.p}>{items.tenChiTiet}</p>  
                                ))}
                            </Box>
                        ))}
                    </Box>
                </>

            ))}



        </Container>
    )
}
