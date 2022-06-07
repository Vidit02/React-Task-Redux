import { addToCart } from "../services/actions/Action"
import { connect } from "react-redux";
import { HomeComponent } from "../component/HomeComponent";
const mapStateToProps = state => ({
    cartData : state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler : data => dispatch(addToCart(data))
})

export default{
    AddData : connect(mapStateToProps,mapDispatchToProps) (HomeComponent)
} 
