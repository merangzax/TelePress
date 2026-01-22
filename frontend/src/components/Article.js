import React, {use, useState} from "react"
import {Typography, Box, Button} from "@mui/material"

function Article() {

    const [article,setArticle] = useState(
         {
            title: "Edisi Terhad",
            date: "10/11/2026",
            author: "Merang Zax",
            img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin sapien dolor, sagittis quis ornare ut, hendrerit sit amet odio. Quisque at libero ac massa venenatis viverra. Fusce eleifend semper nulla nec ultrices."
        }
    )
       
    
    return (
        <>
        <Box
        ml={2}
        mr={2}
        >

            <Box
            mb={2}
            component="img"
            src={article.img}
            />

            <Typography
            variant="h4"
            fontWeight="bold"
            > {article.title}
            </Typography>

            {article.date} - {article.author}

            <Typography
            mt={2}
            > {article.content}
            </Typography>

            <Button
            variant="contained"
            onClick={() => setArticle((prev) => ({...prev, title:"New Title Added Succesfully!"}))}
            sx={{mt:2}}
            > Set Title
            </Button>

        </Box>
        </>
    )

    
}

export default Article;