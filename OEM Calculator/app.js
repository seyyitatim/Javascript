// Storage Controller
const StorageController = (function () {

    storeProduct = function (product) {
        let products;
        if (localStorage.getItem("products") === null) {
            products = [];
            products.push(product);
        } else {
            products = JSON.parse(localStorage.getItem("products"));
            products.push(product);
        }
        localStorage.setItem("products", JSON.stringify(products));
    }

    getProducts = function () {
        let products;
        if (localStorage.getItem("products") === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem("products"));
        }
        return products;
    }

    updateProduct = function (product) {

        let products = JSON.parse(localStorage.getItem("products"));

        products.forEach((prd, index) => {
            if (product.id == prd.id) {
                products.splice(index, 1, product);
            }
        })

        localStorage.setItem("products", JSON.stringify(products));
    }

    deleteProduct = function (id) {

        let products = JSON.parse(localStorage.getItem("products"));

        products.forEach((prd, index) => {
            if (id == prd.id) {
                products.splice(index, 1);
            }
        })

        localStorage.setItem("products", JSON.stringify(products));
    }

    return {
        storeProduct,
        getProducts,
        updateProduct,
        deleteProduct
    }
})();

// Product Controller
const ProductController = (function () {

    const Product = function (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: StorageController.getProducts(),
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

    getProductById = function (id) {
        var products = getProducts();
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                return products[i];
            }
        }
    }

    setCurrentProduct = function (product) {
        data.selectedProduct = product;
    }

    getCurrentProduct = function () {
        return data.selectedProduct;
    }

    updateProduct = function (name, price) {
        var product = null;

        data.products.forEach(prd => {
            if (prd.id == data.selectedProduct.id) {
                prd.name = name;
                prd.price = parseFloat(price);
                product = prd
            };
        });
        return product
    }

    deleteProduct = function (product) {
        var products = data.products;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id == product.id) {
                products.splice(i, 1);
                break;
            }
        }
    }
    return {
        getProducts,
        getData,
        addProduct,
        getTotal,
        getProductById,
        setCurrentProduct,
        getCurrentProduct,
        updateProduct,
        deleteProduct
    }
})();

// UI Controller
const UIController = (function (ProductCtrl) {

    const Selectors = {
        productList: "#item-list",
        productListItems: "#item-list tr",
        addButton: ".addBtn",
        updateButton: ".updateBtn",
        deleteButton: ".deleteBtn",
        cancelButton: ".cancelBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalTl: "#total-tl",
        totalDollar: "#total-dollar"
    }

    //private

    clearTable = function () {
        document.querySelector(Selectors.productList).innerHTML = "";
    }

    addProductToTable = function (product) {
        showCard();
        var html = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td class="text-right">
                    <i class="fa fa-edit edit-product"></i>
                </td>
            </tr>`;

        document.querySelector(Selectors.productList).innerHTML += html;
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

    updateProduct = function (updateProduct) {
        let updatedItem = null;

        let Items = document.querySelectorAll(Selectors.productListItems);

        Items.forEach(item => {
            // if (item.children[0].textContent == updateProduct.id) {
            if (item.classList.contains("bg-warning")) {
                item.children[1].textContent = updateProduct.name;
                item.children[2].innerText = updateProduct.price + " $";

                updatedItem = item;
            }
        });

        return updatedItem;
    }

    clearInputs = function () {
        document.querySelector(Selectors.productName).value = "";
        document.querySelector(Selectors.productPrice).value = "";
    }

    clearWarnings = function () {
        var items = document.querySelectorAll(Selectors.productListItems);

        items.forEach(item => {
            item.classList.remove("bg-warning");
        });
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

    addProductToForm = function () {
        const selectedProduct = ProductCtrl.getCurrentProduct();
        document.querySelector(Selectors.productName).value = selectedProduct.name;
        document.querySelector(Selectors.productPrice).value = selectedProduct.price;
    }

    addState = function (item) {
        UIController.clearWarnings();
        clearInputs();
        document.querySelector(Selectors.addButton).style.display = "inline";
        document.querySelector(Selectors.deleteButton).style.display = "none";
        document.querySelector(Selectors.updateButton).style.display = "none";
        document.querySelector(Selectors.cancelButton).style.display = "none";
    }

    editState = function (tr) {

        const parent = tr.parentNode;

        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].classList.remove("bg-warning");
        }

        tr.classList.add("bg-warning");
        document.querySelector(Selectors.addButton).style.display = "none";
        document.querySelector(Selectors.deleteButton).style.display = "inline";
        document.querySelector(Selectors.updateButton).style.display = "inline";
        document.querySelector(Selectors.cancelButton).style.display = "inline";

    }

    deleteProduct = function () {
        // var row = document.querySelector(".bg-warning");
        // row.remove();

        let items = document.querySelectorAll(Selectors.productListItems);

        items.forEach(function (item) {
            if (item.classList.contains("bg-warning")) {
                item.remove();
            }
        })
    }
    return {
        addProductsList,
        getSelectors,
        addProduct,
        clearInputs,
        hideCard,
        showCard,
        showTotal,
        addProductToForm,
        addState,
        editState,
        updateProduct,
        clearWarnings,
        deleteProduct
    }
})(ProductController);

// App Controller
const App = (function (ProductCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UICtrl.getSelectors();

    // Load Event Listeners
    const loadEventListeners = function () {
        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);

        // edit product click
        document.querySelector(UISelectors.productList).addEventListener("click", productEditClick);

        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener("click", productEditSubmit);

        // cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener("click", cancel);


        // delete button click
        document.querySelector(UISelectors.deleteButton).addEventListener("click", deleteProduct);
    }

    const productAddSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            // add product
            const newProduct = ProductCtrl.addProduct(productName, productPrice);

            // add item to list
            UICtrl.addProduct(newProduct);

            // add product to LS
            StorageCtrl.storeProduct(newProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // clear inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    const productEditClick = function (e) {

        if (e.target.classList.contains("edit-product")) {
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            // get selected product
            const product = ProductCtrl.getProductById(parseInt(id));

            // set current product
            ProductCtrl.setCurrentProduct(product);

            // add product to UI
            UICtrl.addProductToForm();

            UICtrl.editState(e.target.parentNode.parentNode);
        }

        e.preventDefault();
    }

    const productEditSubmit = function (e) {
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            const updateProduct = ProductCtrl.updateProduct(productName, productPrice)

            // update ui
            let item = UICtrl.updateProduct(updateProduct);

            // get total
            const total = ProductCtrl.getTotal();

            // show total
            UICtrl.showTotal(total);

            // update storage
            StorageCtrl.updateProduct(updateProduct);

            UICtrl.clearInputs();

            UICtrl.addState(item);
        }


        e.preventDefault();
    }

    const cancel = function (e) {

        UICtrl.clearWarnings();
        UICtrl.addState();

        e.preventDefault();
    }

    const deleteProduct = function (e) {

        // get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct();

        // delete product
        ProductCtrl.deleteProduct(selectedProduct);

        // UI delete product
        UICtrl.deleteProduct(selectedProduct);
        
        // delete from storage
        StorageCtrl.deleteProduct(selectedProduct.id);

        // get total
        const total = ProductCtrl.getTotal();

        // show total
        UICtrl.showTotal(total);


        UICtrl.clearInputs();

        if (total == 0) {
            UICtrl.hideCard();
        }

        UICtrl.addState();

        e.preventDefault();
    }


    init = function () {
        console.log("starting app...");

        UICtrl.addState();

        let products = StorageCtrl.getProducts();

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

})(ProductController, UIController, StorageController);

App.init();