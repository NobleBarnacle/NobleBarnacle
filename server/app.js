var express = require('express');
var bodyParser = require('body-parser');
var modelHandler = require('./modelHandler.js');
var db = require('./db/mongoSchema.js');
var defaultInstantiator = require('./db/models/defaultInstantiator.js');

var app = express();
// app.set('views', __dirname + '/views');
app.use(express.static('../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

defaultInstantiator.instantiateDefaultModel('mack');

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.send('homePage');
});

app.get('/model', function (req, res) {
  //get entire model for given username
  modelHandler.getModel(req, res);
});

//routes from client
//get main page ('/')
// GET
  //Model
    //('/model') => get model by id

// POST
  //Expenses
    // ('/expenses/employees') => add employee
    // ('/expenses/employees/employeeId') => update employee by id
    // ('/expenses/ganda/') => add ganda item
    // ('/expenses/ganda/itemId') => update ganda expense by id
    // ('/expenses/startupCosts') => add startup cost
    // ('/expenses/startupCosts/startupCostId') => update startup cost by id
  //Debt and Equity
    // ('/debtandequity') => add debt and equity item
    // ('/debtandequity/debtandequityid') => update debt and equity by id
  //Products
    // ('/products') => add product
    // ('/products/productid') => update product by id



