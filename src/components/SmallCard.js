import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";




const SmallCard = ({ buttonText, smallDesc, imageUrl }) => {
    return (
        <Card sx={{ maxWidth: 345, padding: '10px', margin: '20px', width: '20%', height: 'auto', borderRadius: '10px' }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageUrl}
                    alt="Donald"
                />
                <CardContent>
                    <Typography variant="body2" color="red">
                        {smallDesc}
                    </Typography>
                    <Typography variant="h5">
                        Demo Card
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        {buttonText}
                    </Button>
                </CardActions>
            </CardActionArea>

        </Card>

    );
};


export default SmallCard;