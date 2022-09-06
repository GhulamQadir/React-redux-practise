import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import '../App.css'

function Home(props) {
    console.log("reduxData=>>", props)
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <br />
            <h1>Name: {props.userName}</h1>
            <h4>Email: {props.email}</h4>
            <Link to="/about">Go to about</Link>
            <br />
            <br />
            <br />
            <div>{
                props.cartData.map((value, index) => {
                    return <div className="cartData" key={index}>
                        <h1>{value.name}</h1>
                        <span>{value.price}</span>
                    </div>
                })
            }</div>
        </div>
    )
}


// const mapStateToProps = (state) => ({
//     name: state.name,
// })



// FOR Multiple Reducers
const mapStateToProps = (state) => ({
    userName: state.auth.name,
    email: state.auth.email,
    cartData: state.cart.cartProducts,
    totalAmount: state.cart.totalAmount
})


export default connect(mapStateToProps, null)(withRouter(Home));
