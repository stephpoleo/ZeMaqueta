from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello():
    parent_item_by_category_list = {
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
            'Tamaño Colchones/Bases/Blancos MX': [
                'Individual',
                'Matrimonial',
                'Matri/Queen'
            ],
            'Tecnologia': [
                'Estandar',
                'Plus'
            ]
        },
        'availability': 4
    }
    return render_template('quotation_page_modals.html', parent_item_category= parent_item_by_category_list)

@app.route('/modal_cambiar_tienda')
def modal():
    tienda_actual = 'Masaryk'
    return render_template('quotation_page_change_store.html', tienda=tienda_actual)

@app.route('/buscar_items')
def search_items():
    return render_template('quotation_page_change_items.html')

@app.route('/logout')
def logout():
    return render_template('logout.html')


if __name__ == "__main__":
    app.run(host ='0.0.0.0', port = 5001, debug = True)