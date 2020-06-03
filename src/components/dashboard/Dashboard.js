import React, { Component } from "react";
import "../../App.css";
import Notifications from "./Notifications";
import ProductList from "../products/ProductList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
    render() {
        console.log(this.props);
        const { products, auth } = this.props;

        if (!auth.uid) return <Redirect to="/signin" />;
        return (
            <div className="content">
                <div className="text-center mt-3 mb-5 " id="our_products">
                    Our Products
                </div>
                <div className="container">
                    <ProductList products={products} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.firestore.ordered.products,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: "products",
        },
    ])
)(Dashboard);
