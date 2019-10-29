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
			head: ["Item ID", "Product Name", "Department", "Price($)", "Quantity"],
			colWidths: [8,35,25,10,10],
			chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
			, 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
			, 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
			, 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
   
		});
		for(var i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
			);
		}
		console.log(displayTable.toString());
		start();
	});
}
function start() {
    inquirer
        .prompt({





        });

}

displayProducts(); 