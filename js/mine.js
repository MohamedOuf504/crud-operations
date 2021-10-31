






























var pNameInput = document.getElementById('pNameId');
var pPriceInput = document.getElementById('pPriceId');
var pCategoryInput = document.getElementById('pCatId');
var pDescriptionInput = document.getElementById('pDescId');
var allProducts = [];
var currentIndex = "";

if (localStorage.getItem('onlineStor') != null) {
    allProducts = JSON.parse(localStorage.getItem('onlineStor'))
    display();
}
else {
    allProducts = [];
}


function addOrUpdate() {
    if (document.getElementById('add-Btn').innerHTML == "Update") {
         UpdateProduct()
    }
    else {


         addProduct()
    }
}

function addProduct() {
    var nameValue = pNameInput.value;
    var priceValue = pPriceInput.value;
    var CategoryValue = pCategoryInput.value;
    var descriptionValue = pDescriptionInput.value;
    var oneProduct =
    {
        name: nameValue,
        price: priceValue,
        Category: CategoryValue,
        description: descriptionValue,
    }
    allProducts.push(oneProduct)
    localStorage.setItem('onlineStor', JSON.stringify(allProducts));
    resetInput()
    display()
}
function resetInput() {
    pNameInput.value = "";
    pPriceInput.value = "";
    pCategoryInput.value = "";
    pDescriptionInput.value = "";
}
function display() {

    var allOfProducts = ""
    for (var i = 0; i < allProducts.length; i++) {
        allOfProducts += `<tr>
              <td> `+ i + `</td>
            <td> `+ allProducts[i].name + `</td>
            <td> `+ allProducts[i].price + `</td>
            <td>`+ allProducts[i].Category + `</td>
            <td>`+ allProducts[i].description + `</td>
            <td> <button class="btn btn-outline-warning" onclick="getProduct(${i})" >Update</button></td>
            <td> <button class="btn btn-outline-danger" onclick="deleteprudect(${i})" >Delete</button></td>
         </tr>`
    }
    document.getElementById('tBody').innerHTML = allOfProducts;
}

function deleteprudect(index) {

    allProducts.splice(index, 1);
    localStorage.setItem('onlineStor', JSON.stringify(allProducts))
    display();
}



function searchProduct(word) {
    var allOfProducts = ""

    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLowerCase().includes(word.toLowerCase()) == true) {
            allOfProducts += `<tr>
            <td>`+ i + ` </td>
            <td>` + allProducts[i].name + `</td>
            <td>` + allProducts[i].price + `</td>
            <td>` + allProducts[i].Category + `</td>
            <td>` + allProducts[i].description + `</td>
            <td> <button class="btn btn-outline-warning" onclick="UpdateProduct(${i})" >Update</button></td>
            <td> <button class="btn btn-outline-danger" onclick="deleteProduct(${i})" >Delete</button>  </td>
         </tr>`
        }
        document.getElementById('tBody').innerHTML = allOfProducts;

    }
}


function getProduct(index) {
    document.getElementById('add-Btn').innerHTML = "Update"
    pNameInput.value = allProducts[index].name
    pPriceInput.value = allProducts[index].price
    pCategoryInput.value = allProducts[index].Category
    pDescriptionInput.value = allProducts[index].description
    currentIndex = index;
}

function UpdateProduct() {

    var oneProduct =
    {
        name: pNameInput.value,
        price: pPriceInput.value,
        Category: pCategoryInput.value,
        description: pDescriptionInput.value,
    }
    allProducts[currentIndex] = oneProduct;
    localStorage.setItem('onlineStor', JSON.stringify(allProducts));
    document.getElementById('add-Btn').innerHTML = "Add Product"
    resetInput()
    display()

}
