export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(product);
        console.log(this.props);
        firestore
            .collection("products")
            .add({
                ...product,
                sellerFirstName: "aakash",
                sellerLastName: "gupta",
            })
            .then(() => {
                dispatch({ type: "CREATE_PRODUCT", product });
            })
            .catch((err) => {
                dispatch({ type: "CREATE_PRODUCT_ERROR", err });
            });
    };
};

export const deleteProduct = (product, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(product);

        const ref = firestore.collection("products").doc(id);
        ref.get().then((doc) => {
            if (doc.exists) {
                var desertRef = firebase.storage().refFromURL(product.file);
                getFirestore()
                    .collection("products")
                    .doc(id)
                    .delete()
                    .then(() => {
                        console.log("success deleted");
                    })
                    .catch((err) => {
                        console.log("error", err);
                    });
                desertRef
                    .delete()
                    .then(function () {
                        console.log("File deleted");
                    })
                    .catch(function (err) {
                        console.log("Error in file deleted");
                    });
            } else {
                console.log("No such product");
            }
        });
    };
};

export const editProduct = (product, id, url) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(product);
        console.log(url);
        console.log(id);
        //console.log(fileType)
        const firebase = getFirebase();
        const ref = firestore.collection("products").doc(id);
        ref.get().then((doc) => {
            if (doc.exists) {
                getFirestore()
                    .collection("products")
                    .doc(id)
                    .set({
                        product_name: product.product_name,
                        file: product.file,
                        category: product.category,
                        brand: product.brand,
                        warranty: product.warranty,
                        dispatch_no: product.dispatch_no,
                        stock: product.stock,
                        content: product.content,
                        price: product.price,
                        //fileType:product.fileType,
                        createdAt: new Date(),
                    })
                    .then(() => {
                        console.log("success Updated");
                    })
                    .catch((err) => {
                        console.log("error", err);
                    });
                if (url) {
                    var desertRef = firebase.storage().refFromURL(url);
                    desertRef
                        .delete()
                        .then(function () {
                            console.log("File deleted");
                        })
                        .catch(function (err) {
                            console.log("Error in file deleted");
                        });
                }
            } else {
                console.log("No such product");
            }
        });
    };
};
