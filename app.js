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

var parentItemByCategoryList = {
    'name': 'MX-LUU-FDU-SAT',
    'internal_sku': 'SK2000',
    'brand': 'LUUNA',
    'country_of_origin': 'México',
    'description': 'Funda de Duvet Satinada',
    'has_variants': 1,
    'item_code': 'MX-LUU-FDU-SAT',
    'item_group': 'Funda de Duvet',
    'item_name': 'Funda de Duvet Satinada',
    'variant_based_on': 'Item Attribute',
    'variants': {
        'Color MX': [
            'Blanco',
            'Azul Marino'
        ],
        'Tamaño Colchones/Bases/Blancos MX': [
            'Individual',
            'Matrimonial',
            'Matri/Queen',
            'Queen',
            'King',
            'California King',
            'Split King'
        ]
    },
    'availability': 4
};

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
        rowItemGrid.setAttribute('onClick', 'addItemToCart(parentItemByCategoryList)');

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

function addItemToCart(item){
    var wrap_modal_header_list = document.getElementById("ze-pos-quotation-add-item-modal-header");
    var dynamicList = '';

    dynamicList = '<h4 id="ze-pos-quotation-add-item-title">' + item['item_name'] + '</h4>';
    dynamicList += '<p id="ze-pos-quotation-add-item-modal-sku-availability">' + item['item_code'] + ' - ' + item['availability'] + ' disponible en tienda</p>';
    wrap_modal_header_list.innerHTML = dynamicList

    var wrap_modal_body_list = document.getElementById("ze-pos-quotation-size-section-modal");
    var dynamicList = '';

    for(key in item){
        if(typeof item[key]=='object') {
            var itemDict = item[key];
            for (key in itemDict) {
                var itemValues = itemDict[key];
                for (var j = 0; j < itemValues.length; ++j) {
                    if(key=='Tamaño Colchones/Bases/Blancos MX'){
                        dynamicList += '<button type="submit" class="ze-pos-quitation-add-item-size-button"> <img class="ze-pos-add-item-size-icon" src="./assets/Check.svg"/> ' + itemValues[j] + '</button>';
                    }
                }
            }
            wrap_modal_body_list.innerHTML = dynamicList
        }
    }

    const sonucModal= document.getElementById("ze-pos-quotation-add-item-modal");
    const modalEl = new bootstrap.Modal(sonucModal);
    modalEl.show();
}
