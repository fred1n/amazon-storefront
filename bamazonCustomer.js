//   file system    //
	var fs = require("fs");

//   inquirer    //
	var inquirer = require("inquirer");

//   mysql    //
	var mysql = require("mysql");

	var keys = require("./keys.js");

	var connection = mysql.createConnection(keys.connection);

	connection.connect(function(err) {
    if (err) throw err;
    	//console.log("Connection made");
		});

//    table and formatting    //
	var cliTable = require("cli-table");

	var colors = require("colors");


	var welcome = "    **********************************************************************\n" +
				  "    **********              WELCOME TO BAMAZON STORE            **********\n" +
				  "    **********      Please browse items on hand to make a       **********\n" +
					"    **********       purchase !!                                **********\n" +
					"    **********                                                  **********\n" +
				  "    **********************************************************************\n\r"

	var orderMsg;

	var goodbye = "    **********************************************************************\n" +
				  "    **********      THANK YOU FOR SHOPPING AT BAMAZON           **********\n" +
				  "    **********          Please visit us again! ;)               **********\n" +
				  "    **********                                                  **********\n" +
				  "    **********************************************************************\n\r"



//  --  Display table of items for sale  --  //
	function displayProducts() {

		console.log(welcome);

		connection.query("SELECT * FROM products", function(err, res) {
		    if (err) throw err;

		    //console.log(" Reached first function")
			var table = new cliTable({
				head: ["Item Number".cyan, "Product Name".cyan, "Department".cyan, "Price".cyan, "Quantity".cyan],
				colWidths: [13, 25, 13, 10, 10],
				});
			
			for(var i = 0; i < res.length; i++) {
				table.push(
				    [res[i].item_id, res[i].product_name, res[i].department_name, parseFloat(res[i].price).toFixed(2), res[i].stock_quantity]
				);
			};
			
			console.log(table.toString());	
			orderMenu();
		});
	};

	
// User order input and table updates //
	function orderMenu(){

		inquirer.prompt([
			{
				type: "input",
				message: "Which item(s) would you like to purchase? (Item Number) ",
				name: "itemNum"
			},
			{
				type: "input",
				message: "How many items would you like to purchase?",
				name: "Qty"
			}
		])
		.then(function (userOrder) {

			connection.query("SELECT * FROM products JOIN departments ON products.department_name = departments.department_name", 
				function(err, res) {
		    		if (err) throw err;

		    		var i = userOrder.itemNum - 1; 

			    	if(res[i].stock_quantity >= userOrder.Qty) {

			    		var updateQty = parseInt(res[i].stock_quantity) - parseInt(userOrder.Qty);

			    		var OrderTotal = parseFloat(res[i].price) * parseFloat(userOrder.Qty);
				    		OrderTotal = OrderTotal.toFixed(2);

	    			// Update the product table stock quantity  //
		    			connection.query("UPDATE products SET ? WHERE ?", 
			    			[ {
			    				stock_quantity: updateQty
			    			  }, 
			    			  {
			    				item_id: userOrder.itemNum
			    			  }], 
			    			function(error, results) {
		    					
		    					if(error) throw error;

		    					orderMsg = "     Your order for " + userOrder.Qty + "  " +  res[i].product_name + " has been placed.  \n" +
		    							   "     Your total is $ " + OrderTotal + "  \n"; 

					    		console.log(orderMsg);
		    				}
		    			);


		    		//   Update the departments table total sales    //
		    			var deptSales = parseFloat(res[i].total_sales) + parseFloat(OrderTotal);
				    		deptSales = deptSales.toFixed(2);

		    			connection.query("UPDATE departments SET ? WHERE ?", [ 
		    				{	total_sales: deptSales  }, 
				    		{	department_name: res[userOrder.itemNum - 1].department_name }
				    		], 
			    			function(error, results) {
			    				//console.log("Order status updated. " + deptSales)
			    				continueShopping();
			    			}
			    		);
			    		
			    	}

			    	else {
			    		orderMsg = "     Insufficient quantity -- We only have " + res[i].stock_quantity + " "  +  res[i].product_name + " \n" +
			    		           "     We are sorry that we cannot fullfill your order request for  " + userOrder.Qty  + " " + res[i].product_name + " \n"; 

		    			console.log(orderMsg);
		    			continueShopping();
		   	    	}	    
				});
			
		});	
	};


//   Ask the user if they would like to continue shopping   //
	function continueShopping(){
		inquirer.prompt([
			{
				type: "confirm",
				message: "Would you like to continue shopping? ",
				name: "cont"
			}
		])
		.then(function (shopping) {
			if (shopping.cont) {
				displayProducts();
			}
			else {
				exitBamazon();
			}
		});
	};



//  Exit and display message //
	function exitBamazon(){
		connection.end();
		console.log(goodbye);
	};


// ***********************************************//
// Start
	displayProducts();