var wrap_category_list = document.getElementById("ze-pos-category-list");
                      
var dynamicList = '';
var categoryList = ['Almohada', 
                    'Almohadas Especializadas', 
                    'Banca', 
                    'Base de cama', 
                    'Base Eléctrica', 
                    'Bundles',
                    'Cama con Cabecera',
                    'Colchón para Bebé', 
                    'Colchones', 
                    'Cubre Colchón', 
                    'Funda Colchón para Bebé', 
                    'Funda de Almohada', 
                    'Funda de Duvet', 
                    'Gotero', 
                    'Hard Shell', 
                    'Juego de Sábanas', 
                    'Mantas con peso', 
                    'Mesa de Noche', 
                    'Protector', 
                    'Relleno de Duvet', 
                    'RollOn', 
                    'Sábanas', 
                    'Services']

for (var i = 0; i < categoryList.length; i++) {
    dynamicList  += '<button id="ze-pos-category-button">' + categoryList[i] + '</button>';
}

wrap_category_list.innerHTML = dynamicList 

var itemsMatrixDict = [
    [
        {
            item_group:'Colchon',
            brand:'Luuna',
            type:'Original',
            sku: 'LU1001',
            availability: 2,
            price: 16000,
            disccount: 0,
            img_source: './assets/product-image.png'
        }, 
        {
            item_group:'Colchon',
            brand:'Luuna',
            type:'One',
            sku: 'ON1001',
            availability: 9,
            price: 31200,
            disccount: 13999,
            img_source: './assets/product-image.png'
        }, 
        {
            item_group:'Colchon',
            brand:'Luuna',
            type:'Blue 3 capas',
            sku: 'BL1001',
            availability: 11,
            price: 12000,
            disccount: 5999,
            img_source: './assets/product-image.png'
        }
    ],
    [
        {
            item_group:'Colchon',
            brand:'Luuna',
            type:'Original Plus',
            sku: 'LU1001HB',
            availability: 7,
            price: 16000,
            disccount: 6999,
            img_source: './assets/product-image.png'
        }, 
    
        {
            item_group:'Colchon',
            brand:'Luuna',
            type:'One Plus',
            sku: 'ON1001HB',
            availability: 3,
            price: 31200,
            disccount: 13999,
            img_source: './assets/product-image.png'
        }
    ],
];

var itemGrid = document.createElement('div');
itemGrid.id = 'ze-pos-item-grid';
itemGrid.className = 'container-fluid';
for (var i = 0; i < itemsMatrixDict.length; ++i) {
    var columnItemGrid = document.createElement('div'); 
    columnItemGrid.id = 'ze-pos-item-grid-column';
    columnItemGrid.className = 'col nopadding';
    var itemDict = itemsMatrixDict[i];
    for (var j = 0; j < itemDict.length; ++j) {
        var rowItemGrid = document.createElement('button');
        rowItemGrid.id = 'ze-pos-item-'+i+'-'+j+'-grid-row';
        rowItemGrid.className = "row ze-pos-item-grid-row";
        rowItemGrid.setAttribute('onClick', 'addItemToCart(this.id)');

        var itemInfo = document.createElement('div');
        itemInfo.id = 'ze-pos-item-info';
        itemInfo.className = 'col-sm-7';
        var itemTitle = document.createElement('h5');
        itemTitle.id = 'ze-pos-item-title';
        itemTitle.textContent = itemDict[j]['item_group'] + ' ' + itemDict[j]['brand'] + ' ' + itemDict[j]['type'];
        var rowItemInventory = document.createElement('div');
        rowItemInventory.id = 'ze-pos-item-inventory-row';
        rowItemInventory.className = "row";
        var itemSku = document.createElement('p');
        itemSku.id = 'ze-pos-item-sku';
        itemSku.className = 'col-sm-auto';
        itemSku.textContent = itemDict[j]['sku'] + ' ·';
        var itemAvailability = document.createElement('p');
        itemAvailability.id = 'ze-pos-item-availability';
        itemAvailability.className = 'col-sm-auto';
        itemAvailability.textContent = itemDict[j]['availability'] + ' en tienda';
        var rowItemPrices = document.createElement('div');
        rowItemPrices.id = 'ze-pos-item-prices-row';
        rowItemPrices.className = "row";
        var itemActualPrice = document.createElement('p');
        itemActualPrice.id = 'ze-pos-item-actual-price';
        itemActualPrice.className = 'col-sm-auto';
        itemActualPrice.textContent = '$' + itemDict[j]['price'];
        var itemDisccountPrice = document.createElement('p');
        itemDisccountPrice.id = 'ze-pos-item-disccount-price';
        itemDisccountPrice.className = 'col-sm-auto';
        itemDisccountPrice.textContent = '$' + itemDict[j]['disccount'];
        itemDisccountPrice.hidden = true;
        var itemImage = document.createElement('img')
        itemImage.id = 'ze-pos-item-image';
        itemImage.className = 'col-sm-5 nopadding';
        itemImage.src = itemDict[j]['img_source'];

        if(itemDict[j]['availability'] < 4) {
            itemAvailability.style.color = 'rgb(141, 22, 22)';
            itemAvailability.style.fontWeight = '400'
        }

        if(itemDict[j]['disccount'] > 0) {
            itemDisccountPrice.style.color = '#ff6783';
            itemDisccountPrice.hidden = false;
            itemActualPrice.style.textDecoration = 'line-through'
        }

        var rowItemPricesFragment = document.createDocumentFragment();
        rowItemPricesFragment.appendChild(rowItemPrices);

        var rowItemInventoryFragment = document.createDocumentFragment();
        rowItemInventoryFragment.appendChild(rowItemInventory);

        var itemInfoFragment = document.createDocumentFragment();
        itemInfoFragment.appendChild(itemInfo);

        var rowItemFragment = document.createDocumentFragment();
        rowItemFragment.appendChild(rowItemGrid);

        rowItemPrices.append(itemActualPrice)
        rowItemPrices.append(itemDisccountPrice)
        rowItemInventory.append(itemSku)
        rowItemInventory.append(itemAvailability)
        itemInfo.append(itemTitle)
        itemInfo.append(rowItemInventory)
        itemInfo.append(rowItemPrices)
        rowItemGrid.append(itemInfo);
        rowItemGrid.append(itemImage);

        columnItemGrid.appendChild(rowItemGrid);
    }
    itemGrid.appendChild(columnItemGrid);
}

document.getElementById("ze-pos-items-grid").appendChild(itemGrid);

/* function addItemToCart(item){
    document.getElementById("ze-pos-quotation-empty-shopping-cart").style.display = "none"
    document.getElementById("ze-pos-quotation-shopping-cart").style.display = "block"
    document.getElementById("ze-pos-quotation-shopping-cart-button").style.display = "block"
    selectedItem = document.getElementById(item);
    document.getElementById("ze-pos-quotation-shopping-cart").innerHTML += selectedItem.innerHTML;
    console.log(selectedItem.innerHTML)
} */