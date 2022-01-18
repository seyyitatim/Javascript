// Storage Controller
const StorageController = (function () {

})();

// Product Controller
const ProductController = (function () {

    // private
    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }

    // public
    getProduct = function () {
        return data.products;
    }

    getData = function () {
        return data;
    }

    addProduct = function (productName, productPrice) {
        let id;

        if (data.products.length > 0) {
            id = data.products[data.products.length - 1].id + 1;
        } else {
            id = 1;
        }

        var newProduct = new Product(id, productName, parseFloat(productPrice));

        data.products.push(newProduct);

        return newProduct;
    }
    return {
        getProduct,
        getData,
        addProduct
    }
})();

// UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "item-list",
        addButton: ".addBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard:"#productCard"
    }

    //private
    showProduct = function (products) {
        var html = "";

        products.forEach(product => {
            html += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td class="text-right">
                    <button type="submit" class="btn btn-warning btn-sm">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
            </tr>`
        });

        document.getElementById(Selectors.productList).innerHTML = html;
    }
    //public
    createProductList = function (products) {
        showProduct(products);
    }

    getSelectors = function () {
        return Selectors;
    }

    addProduct = function (product) {
        var html = `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price} $</td>
            <td class="text-right">
                <button type="submit" class="btn btn-warning btn-sm">
                    <i class="fa fa-edit"></i>
                </button>
            </td>
        </tr>`

        document.getElementById(Selectors.productList).innerHTML += html;
    }

    clearInputs = function(){
        document.querySelector(Selectors.productName).value = "";
        document.querySelector(Selectors.productPrice).value = "";
    }
    return {
        createProductList,
        getSelectors,
        addProduct,
        clearInputs
    }
})();

// App Controller
const App = (function (ProductCtrl, UICtrl) {

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {

        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);
    }

    const productAddSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            // add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // add item to list
            UICtrl.addProduct(newProduct);

            // clear inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }



    init = function () {
        console.log("starting app...");
        let products = ProductCtrl.getProduct();

        UICtrl.createProductList(products);

        // load event listeners
        loadEventListeners();
    }
    return {
        init,
        productAddSubmit
    }

})(ProductController, UIController);

App.init();