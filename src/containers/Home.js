import { Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'

function Home(props) {
    console.log("reduxData=>>", props)
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>Home Page</h1>
            <Link to="/about">Go to about</Link>
        </div>
    )
}


const mapStateToProps = (state) => ({
    name: state.name,
    email: "ghulamqadirsakaria25@gmail.com"    // adding hard coded value
})

export default connect(mapStateToProps, null)(withRouter(Home));
