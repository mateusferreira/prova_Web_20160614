var ProductList = {
	
	list: [],
	
	getList: function() {
        //alert("ddd");
		ProductList.getFromLocalStorage();
		return ProductList.list;
	},
	
	add: function(produto) {
		ProductList.list.push(produto);
		ProductList.saveToLocalStorage();
	},
	
	
	
	saveToLocalStorage: function() {
		var jsonText = JSON.stringify(ProductList.list);
		window.localStorage.setItem('product-list', jsonText);
	},
	
	getFromLocalStorage: function() {
		var jsonText = window.localStorage.getItem('product-list');
		if(jsonText) {
			ProductList.list = JSON.parse(jsonText);
		}
	}
	
};