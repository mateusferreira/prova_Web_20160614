var addController = {
    
 init: function() {
		addController.setForm();
		addController.listProducts();
		
	},
    setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
		    addController.addProduto(form);
			addController.clearForm(form);
				//to avoid page refresh/reload
			event.preventDefault();
			});
		},
        addProduto: function(form) {
			var prod = {
				name: form.produto.value,
				valor: form.valor.value
			};
			
			ProductList.add(prod);
			addController.addProdutoToHTML(prod);
		},
		
		listProducts: function() {
			
			var produtos = ProductList.getList();
				
			produtos.forEach(function(prod) {
				addController.addProdutoToHTML(prod);
			});
		},
		
		addProdutoToHTML: function(prod) {
			
		var
			section = document.getElementById('guestList'),
			dl = document.createElement('dl'),
			//dt = addController.createDT(prod),
			ddName = addController.createDDName(prod),
			ddValor = addController.createValor(prod.valor, 'valor');	
			
			//	dl.appendChild(dt);
			dl.appendChild(ddName);
			dl.appendChild(ddValor);
				
			section.appendChild(dl);
		},
		
		createDD: function(value, className) {
		var dd = document.createElement('dd');
		
		dd.className = className;
		dd.innerHTML = value;
		
		return dd;
	},
		
		createValor: function(prod) {
		var 
			dd = addController.createDD(prod.valor, 'valor');
		
		return dd;
	},
		
		createDDName: function(prod) {
		var 
			dd = addController.createDD(prod.name, 'name');
		
		return dd;
	}
};

addController.init();


