var sellingPrice = 199;
var listingPrice = 799;
discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;

var result = listingPrice > sellingPrice;

console.log(typeof result);