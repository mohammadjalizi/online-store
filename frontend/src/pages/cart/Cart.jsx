import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  styled,
  IconButton,
  Badge, Typography, Divider, Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux'
import { decreaseQuantity, deleteProduct, increaseQuantity } from "Redux/CartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

const Cart = () => {
  const {selectedProducts} = useSelector((state) => state.carttt)
  const dispatch = useDispatch()

  let Subtotal=0
  return (
    <Box>
   {selectedProducts.map(item=>{

    Subtotal+=item.price *item.quantity
return(

  <Paper dir="rtl" className="item-container">
  <div className="img-title-parent">
    <img src={item.imageLink[0]} alt="" />
    <p className="product-name">{item.productName}</p>
  </div>

  <div style={{ display: "flex", alignItems: "center" }}>
    <IconButton sx={{ color: "#1976d2", ml: "10px" }} onClick={() => {

dispatch(increaseQuantity(item))

    }}>
      <Add />
    </IconButton>

    <StyledBadge badgeContent={item.quantity} color="secondary" />

    <IconButton sx={{ color: "#1976d2", mr: "10px" }} onClick={() => {

dispatch(decreaseQuantity(item))
    }}>
      <Remove />
    </IconButton>
  </div>

  <div className="price">${item.price *item.quantity}</div>

  <Button      sx={{display:{xs:'none',md:'inline-flex'}}} variant="text" color="error"onClick={() => {
   dispatch(deleteProduct(item))
  }
  }>
    delete
  </Button>
  <IconButton sx={{color:'#ef5350',display:{md:"none"}}} onClick={() => {
   dispatch(deleteProduct(item))
  }
  }>
    <Delete/>
  </IconButton> 
</Paper>

)

   })}
      <Paper sx={{width:"200px", mx:'auto',mt:'60px'}}>

 <Typography align="center"   p={2}> Cart summary  </Typography>
<Divider/>
<Stack sx={{justifyContent:'space-between',p:1.2} } direction={"row"}>
<Typography  > Subtotal </Typography>
<Typography  >${Subtotal}  </Typography> 

</Stack>
<Divider/>
<Button fullWidth variant="contained" color="primary">
  CHECKOUT
</Button>
      </Paper>
    </Box>
  );
};

export default Cart;