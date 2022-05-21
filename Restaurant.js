
class restaurantManager{

    restaurantList = [{
        restaurant_number : 1,
        restaurant_name : 'BurgerKing' ,
        restaurant_address : 'ForumMall',
        restaurant_city : 'Hyderabad',

    },{
        restaurant_number : 2,
        restaurant_name : 'McDonalds' ,
        restaurant_address : 'HytensionRoad' ,
        restaurant_city :'Delhi' ,
    },
    {
    restaurant_number : 3,
        restaurant_name : 'Abhays_Kitchen' ,
        restaurant_address : 'Sanjeevani_Road',
        restaurant_city :'Noida', 
},{
    restaurant_number : 4,
        restaurant_name : 'Pizzahut',
        restaurant_address : 'Kompally' ,
        restaurant_city : 'Hyderabad',
}];
    printAllRestaurantNames()  {
        return this.restaurantList.map((restaurant )=> restaurant.restaurant_name);
    }
    filterRestaurantByCity(city){
        return this.restaurantList.filter((restaurant )=>restaurant.restaurant_city == city);
    }
}

const Akanksha = new restaurantManager();
console.log("Task 1(a) ==> List of all the Restauarant Names in the List");

console.log(Akanksha.printAllRestaurantNames());
console.log("Task 1(b) ==> List of restuarnts in a particular city");
console.log("Restauarants in Hyderabad are: ");
console.log(Akanksha.filterRestaurantByCity('Hyderabad'));
console.log("Restauarants in Delhi are: ");
console.log(Akanksha.filterRestaurantByCity('Delhi'));
console.log("Restauarants in Noida are: ");
console.log(Akanksha.filterRestaurantByCity('Noida'));

const orderData={  

    "Below 500":20,
    "500-1000":29,
    "1000-1500":30,
    "1500-2000":44,
    "above 2000":76,
};

let total_orders = 0;
for (let x in orderData) {
  total_orders += orderData[x] ;
}
console.log("Task 2(a)");
console.log("Total Number of orders placed are",total_orders);

console.log("Task 2(b)");
console.log("Total number of order proportions ",Object.keys(orderData).length);
console.log("Task 2(c)");
const percentage=Object.keys(orderData).map((key,index)=>{
    return{
        id:index+1,
        order:key,
        order_percentage:((orderData[key]/total_orders)*100).toFixed(2),
        restaurant:"Punjabi Tadka"
    };
  });

  console.log(percentage);
