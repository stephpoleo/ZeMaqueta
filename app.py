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

@app.route('/wholesales_channels')
def channel_list():
    channels = [
      { 'id': 'liverpool', 'name': 'Liverpool', 'description': 'Empresa de tiendas departamentales en México.', 'image': '../static/assets/wholesale/liverpool_icon.webp'},
      { 'id': 'sears', 'name': 'Sears', 'description': 'Empresa tiendas departamentales y servicios básicos de reparación de automóviles.', 'image': '../static/assets/wholesale/sears_icon.webp'},
      { 'id': 'sams', 'name': "Sam's Club", 'description': 'Tienda de autoservicio con ventas del mayoreo y medio mayoreo mediante membresía.', 'image': '../static/assets/wholesale/sams_icon.webp'}
      ]
    return render_template('channel_list.html', channels=channels)

@app.route('/wholesales_categories')
def category_list():
    categories = [
      { 'id': 'PO y Carga Automatizada', 'name': 'PO y Carga Automatizada', 'description': 'Descripción', 'icon': 'upload_file'},
      { 'id': 'Simulación de Movimientos y Disponibilidad de Inventario.', 'name': 'Simulación de Movimientos y Disponibilidad de Inventario.', 'description': 'Descripción', 'icon': 'inventory'},
      { 'id': 'Conciliación de Remisiones', 'name': "Conciliación de Remisiones", 'description': 'Descripción', 'icon': 'package_2'}
      ]
    channel = { 'id': 'liverpool', 'name': 'Liverpool', 'description': 'Empresa de tiendas departamentales en México.', 'image': '../static/assets/wholesale/liverpool_icon.webp'}
    return render_template('category_list.html', categories=categories, channel=channel)

@app.route('/inventory_simulation')
def inventory_simulation():
    category = { 'id': 'Simulación de Movimientos y Disponibilidad de Inventario.', 'name': 'Simulación de Movimientos y Disponibilidad de Inventario.', 'description': 'Descripción', 'icon': 'inventory'}
    channel = { 'id': 'liverpool', 'name': 'Liverpool', 'description': 'Empresa de tiendas departamentales en México.', 'image': '../static/assets/wholesale/liverpool_icon.webp'}
    channel_request_monitor_list = [{
      'id': 1,
      'name': 'P.O. 123',
      'date': '24/11/2023',
      'status': 'Overdue'
    }, {
      'id': 2,
      'name': 'P.O. 2345',
      'date': '23/03/2023',
      'status': 'To Deliver',
    }, {
      'id': 3,
      'name': 'P.O. 3456',
      'date': '09/02/2023',
      'status': 'On Time',
    },{
      'id': 3,
      'name': 'P.O. 3456',
      'date': '09/02/2023',
      'status': 'Completed',
    }]
    status_dictionary = {
      'Overdue': 'danger',
      'To Deliver': 'warning',
      'On Time': 'success',
      'Completed': 'info'
    }
    channel_request_monitor_items = [{
      'sku': 'SKU 123',
      'qty_po': 300,
      'qty_current': 100,
      'qty_compromised': 10,
      'stock': -210,
      'date': '04/12/2023'
    }, {
      'sku': 'SKU 234',
      'qty_po': 200,
      'qty_current': 100,
      'qty_compromised': 20,
      'stock': -120,
      'date': '15/04/2023'
    }, {
      'sku': 'SKU 123',
      'qty_po': 500,
      'qty_current': 800,
      'qty_compromised': 10,
      'stock': 290,
      'date': '09/05/2023'
    }]
    return render_template('inventory_simulation.html', 
                            category=category, 
                            channel=channel, 
                            channel_request_monitor_list=channel_request_monitor_list, 
                            status_dictionary=status_dictionary,
                            channel_request_monitor_items=channel_request_monitor_items)


if __name__ == "__main__":
    app.run(host ='0.0.0.0', port = 5001, debug = True)