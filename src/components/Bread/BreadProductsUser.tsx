import {useAppSelector} from "../../redux/hooks.ts";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import type {ProductType} from "../../utils/shop-types.ts";
import {useNavigate} from "react-router-dom";
import {addProductUnitToCart} from "../../firebase/firebaseCartService.ts";


const BreadProductsUser = () => {
    const navigate = useNavigate();
    const autUser = useAppSelector(state => state.auth.authUser);
    const {currProds} = useAppSelector(state => state.products);

    return (

        <Grid container>
            {currProds.map((item: ProductType) =>
                <Grid key={item.id!} size={{xs: 12, sm: 6, md: 3}}>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 140}}
                            image={"/images/" + item.img}
                            title={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={async () => {
                                if (!autUser) {
                                    navigate('/signin');
                                }
                                await addProductUnitToCart(`${autUser}_collection`, item.id!)
                            }}>+</Button>
                            <Typography>0</Typography>
                            <Button size="small">-</Button>
                        </CardActions>
                    </Card>
                </Grid>
            )};

        </Grid>

    );
};

export default BreadProductsUser;