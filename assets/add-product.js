$(document).ready(function(){
    // alert(window.Shopify.routes.root)
    // jQuery.postJSON(window.Shopify.routes.root + 'https://cdmydevelopmentstore/admin/api/2021-10/products.json', function(product) {
    //     alert('The title of this product is ' + product.title);
    //   } );
    jQuery.postJSON(window.Shopify.routes.root + 'admin/api/2021-10/products.json', function(product) {
        alert('The title of this product is ' + product.title);
      } );
})