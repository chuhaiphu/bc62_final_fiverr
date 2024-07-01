import { Box, Button, Rating } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAddComment } from "~/hooks/addComment-hook";
import { useUserStore } from "~/store/user-store"


export default function AddComment({ props }: any) {
    // const user = useUserStore((state) => state.user);
    const user = { avatar: 221, id: 1 }
    
    const [value, setValue] = useState<number | null>(5);
    const { mutate: addComment } = useAddComment( );

    
    const handleComment = () => {
        const dataComment = {
            maNguoiBinhLuan: user?.id,
            noiDung: (document.getElementById('comment') as HTMLInputElement)?.value ?? '',
            ngayBinhLuan: new Date().toLocaleDateString(),
            saoBinhLuan: value! , 
            maCongViec: props,
        };
        console.log(dataComment);
        
        addComment(dataComment);
        
    }
    return (
        (user !== null) ? (
            <Box display='flex' flexDirection='column'>
                <Box   style={{margin:'0 0 1vh 3vh', display: 'flex' ,alignItems:'center'}}>
                    <p style={{paddingTop: '2vh'}}>Đánh giá :</p>
                    <Rating
                    style={{ margin: '2vh 0 0 2vh' }}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                </Box>
                <Box display='flex'>
                    {user?.avatar}
                    <textarea id="comment" name="comment" placeholder="Nhập bình luận của bạn..." style={{ width: '70%' }}></textarea>
                </Box>
                <Button onClick={handleComment} style={{ width:'15vw', margin: '2vh 0 0 2vh' }} variant="contained">Add Comment</Button>
            </Box>
        ) : (
            <Box >
                <Button style={{ margin: '2vh 0 0 2vh' }} variant="contained">Login to Add Comment</Button>
            </Box>
        )
    )
}
