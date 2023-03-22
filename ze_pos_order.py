class ZePOSOrder:
    def __init__(self, pos_profile, seller, seller_name, seller_id, price_list, country):
        self._pos_profile = pos_profile
        self._seller = seller
        self._seller_name = seller_name
        self._seller_id = seller_id
        self._price_list = price_list
        self._country = country
    
    def get_pos_profile(self):
        return self._pos_profile
    
    def get_seller(self):
        return self._seller
        
    def get_seller_name(self):
        return self._seller_name
        
    def get_seller_id(self):
        return self._seller_id
    
    def get_price_list(self):
        return self._price_list

    def get_country(self):
        return self._country

    def set_pos_profile(self, pos_profile):
        self._pos_profile = pos_profile
    
    def set_seller(self, seller):
        self._seller = seller
        
    def set_seller_name(self, seller_name):
        self._seller_name = seller_name
        
    def set_seller_id(self, seller_id):
        self._seller_id = seller_id
        
    def set_price_list(self, price_list):
        self._price_list = price_list
        
    def set_country(self, country):
        self._country = country
        