// Storage Controller
const StorageController = (function () {

})();

// Product Controller
const ProductController = (function () {

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
    getProducts = function () {
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

    getTotal = function () {
        let total = 0;

        data.products.forEach(product => {
            total += product.price;
        });

        data.totalPrice = total;
        return data.totalPrice;
    }
    return {
        getProducts,
        getData,
        addProduct,
        getTotal
    }
})();

// UI Controller
const UIController = (function () {

    const Selectors = {
        productList: "item-list",
        addButton: ".addBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalTl: "#total-tl",
        totalDollar: "#total-dollar"
    }

    //private

    clearTable = function () {
        document.getElementById(Selectors.productList).innerHTML = "";
    }

    addProductToTable = function (product) {
        showCard();
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
    //public
    addProductsList = function (products) {
        clearTable();
        products.forEach(product => {
            addProductToTable(product);
        });
    }

    getSelectors = function () {
        return Selectors;
    }

    addProduct = function (product) {
        addProductToTable(product);
    }

    clearInputs = function () {
        document.querySelector(Selectors.productName).value = "";
        document.querySelector(Selectors.productPrice).value = "";
    }

    hideCard = function () {
        document.querySelector(Selectors.productCard).style.display = "none";
    }

    showCard = function () {
        document.querySelector(Selectors.productCard).style.display = "block";
    }

    showTotal = function (total) {
        document.querySelector(Selectors.totalDollar).innerText = total;
        document.querySelector(Selectors.totalTl).innerText = total * 4.5;
    }
    return {
        addProductsList,
        getSelectors,
        addProduct,
        clearInputs,
        hideCard,
        showCard,
        showTotal
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

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // clear inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    init = function () {
        console.log("starting app...");
        let products = ProductCtrl.getProducts();

        // load event listeners
        loadEventListeners();

        if (products.length == 0) {
            UICtrl.hideCard();

            UICtrl.showTotal(0);
        } else {
            UICtrl.addProductsList(products);
        }
    }
    return {
        init
    }

})(ProductController, UIController);

App.init();