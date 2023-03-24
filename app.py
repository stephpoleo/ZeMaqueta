from ze_pos_order import ZePOSOrder
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
    order = ZePOSOrder('Tienda Luuna Masaryk', 'Marco Herrera', 'Marco Herrera', '1234', 'LUUNA 2022', 'México')
    return render_template('quotation_page_modals.html', parent_item_category= parent_item_by_category_list, ze_pos_order = order)

@app.route('/modal_cambiar_tienda')
def modal():
    tienda_actual = 'Masaryk'
    return render_template('quotation_page_change_store.html', tienda=tienda_actual)

@app.route('/buscar_items')
def search_items():
    return render_template('quotation_page_change_items.html')

@app.route('/quotation_detail')
def show_quotation_items():
    order = ZePOSOrder('Tienda Luuna Masaryk', 'Marco Herrera', 'Marco Herrera', '1234', 'LUUNA 2022', 'México')
    return render_template('quotation_details.html', ze_pos_order = order)

@app.route('/logout')
def logout():
    return render_template('logout.html')

@app.route('/payment')
def payment():
    payment_methods = ['paypal-logo.png', 'mercado-pago-logo.png', 'clip-logo.png']
    selected_payment_methods = {
        'Efectivo': 900,
        'Paypal': 7000
    }
    available_credits = {
        'credit_used': 400.0,
        'credit_converted': 400.0,
    }

    lead_details = {
        'name': 'Lionel Messi-liomessi@gmail.com',
        'country': 'Mexico',
        'email_id': 'liomessi@gmail.com',
        'lead_name': 'Lionel Messi',
        'mobile_no': None,
        'origin_from': 'POS',
        'phone': '5512345678',
        'status': 'Converted',
        'successful_sales_counter': '0',
        'addresses': ['CALLE DARWIN 78, 11590-Shipping',
                      'VALLE SOLEADO 100 23, 42086-Shipping']
    }

    return render_template('payment_page.html', 
                            payment_methods= payment_methods, 
                            payment_methods_length= len(payment_methods), 
                            selected_methods= selected_payment_methods, 
                            lead= lead_details,
                            credits= available_credits)


if __name__ == "__main__":
    app.run(host ='0.0.0.0', port = 5001, debug = True)