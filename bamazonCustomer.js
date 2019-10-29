var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "BB9WtabbreFf9ez",
    database: "bamazon"
});
connection.connect(function(err) {
    if(err) throw err;

});
var displayProducts = function(){
	var query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Department", "Price", "Quantity"],
			colWidths: [12,35,25,10,25],
			chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
			, 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
			, 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
			, 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
   
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
                [res[i].item_id,res[i].product_name, res[i].department_name, "$" + res[i].price, 
                res[i].stock_quantity + " in stock"]
			);
		}
		console.log(displayTable.toString());
		start();
	});
}
function start() {
    inquirer
        .prompt([
            {
                name: "IDnum",
                type: "input",
                message:"Please enter the Item ID for the product you want to purchase:",
                filter:Number
            },
            {
                name:"Quantity",
                type:"input",
                message:"How many items would you like to purchase?",
                filter:Number
            }
    ])
    .then(function(ans) {
        var itemID = ans.IDnum;
        var itemQuant = ans.Quantity;
        buyItems(itemID, itemQuant);
    })
};
function buyItems(itemID, itemQuant) {
    connection.query("SELECT * FROM products WHERE item_id = " + itemID, function(err, res) {
        if(err) {
            console.log(err);
        }
        if(itemQuant <= res[0].stock_quantity) {
            var totalCost = res[0].price * itemQuant;
            console.log("Your items have successfully been added to your cart!");
            console.log("Your total will be: " + "$" + totalCost);
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + itemQuant + "WHERE item_id = " + itemID);
        }
        else {
            console.log("Insufficient quantity! Sorry, we do not have enough of that item in stock to complete your purchase."); 
        }
        displayProducts();
    })
}

displayProducts(); 