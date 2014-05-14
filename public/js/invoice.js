angular.module('invoice', []).controller('InvoiceController', function() {
    this.laptopPrice = "1000";
    this.screenPrice = "0";
    this.hardDrivePrice = "0";
    this.ramPrice = "0";

    this.total = function() {
      return (parseInt(this.laptopPrice) + parseInt(this.screenPrice) + 
        parseInt(this.hardDrivePrice) + parseInt(this.ramPrice));
      
    };
    

  });
