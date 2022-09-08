import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import '../App.css'
import { addUser, greet } from "../store/actions"

function Home(props) {
    console.log("reduxData=>>", props)

    let user = { name: "Sameer", email: "sameer@gmail.com" }
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <br />
            <h1>Name: {props.userName}</h1>
            <h4>Email: {props.email}</h4>
            <Link to="/about">Go to about</Link>
            <br />
            <button onClick={() => props.greet(props.userName)}>Click me !</button>
            <br />
            <br />
            <button onClick={() => props.addNewUser(user)}>Add User</button>
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

// for getting data from state
const mapStateToProps = (state) => ({
    userName: state.auth.name,
    email: state.auth.email,
    cartData: state.cart.cartProducts,
    totalAmount: state.cart.totalAmount,
    afterDiscount: state.cart.afterDiscount,
    users: state.auth.users
})



// (functions hpty hain jo actions ma bnaty hain)
const mapDispatchToProps = (dispatch) => ({
    greet: (name) => dispatch(greet(name)),       // for adding this function into state
    addNewUser: (user) => dispatch(addUser(user))
})


// export default connect(mapStateToProps, null)(withRouter(Home));

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
