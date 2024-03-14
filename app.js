/** Ek array mein integers ki series banao, aur phir usmein slice() ka istemal karke kisi specific range ke elements ko nikaal kar ek naya array banao. */

var integers = [32, 43, 56, 75, 98];
console.log(integers);
var range = integers.slice(2, 4);
console.log(range);


/**Ek array di gayi hai. Us array mein splice() ka istemal karke kuch elements hatao aur unhein ek alag array mein store karo */

var students = ["Ammar", "Uzair", "Saif", "Anas", "Kashan", "Hassan"];
console.log(students);
var del = students.splice(2, 3);
console.log(del);


/**Ek array di gayi hai. Us array ko shift() karke uska pehla element hatao aur usse ek variable mein store karo */

var grossey = ["ketchup", 'cheeni', 'ghee ', 'ata'];
console.log(grossey);
var deletItem = grossey.shift();
console.log(deletItem);
console.log(grossey);

/**Ek array di gayi hai. Us array mein unshift() ka istemal karke ek naya element add karo */
var winter = ['shoes', 'jacket', 'socks'];
console.log(winter);
winter.unshift("sweater");
console.log(winter);


/**Ek array di gayi hai. Us array mein push() ka istemal karke ek naya element add karo. */

var phoneManufactue = ['Nokia', 'Motorola', 'Realme'];
console.log(phoneManufactue);
phoneManufactue.push("Apple", "Samsung");
console.log(phoneManufactue);

/**Ek array di gayi hai. Us array mein pop() ka istemal karke ek element remove karo aur usse ek variable mein store karo. */

var restaurant = ['KFC', 'McDonald', 'Tim Hortons'];
console.log(restaurant);
var delet_Item = restaurant.pop();
console.log(delet_Item);
console.log(restaurant);

/**Ek array di gayi hai. Us array ko slice() ka istemal karke uske kuch elements ko naye array mein move karo aur original array ko intact rakho. */

var food = ['Biryani', 'Qourma', 'Nihari', 'Tikka'];
console.log(food);
var move = food.slice(1, 3);
// console.log(food);
console.log(move);


/**Ek array di gayi hai. Us array mein splice() ka istemal karke kuch elements ko remove karo aur unhein ek naye array mein store karo. */

var breakfast = ['Omelate', 'Paratha', 'Fry Egg', 'Juice', 'Milk'];
console.log(breakfast);
var selected = breakfast.splice(1, 2);
console.log(breakfast);
console.log(selected);

/** Ek array di gayi hai. Us array mein shift() ka istemal karke elements ko ek ek karke remove karo aur unhein alag-alag variables mein store karo. */

var car = ['Honda', 'Toyota', 'Kia', 'Suzuki'];
console.log(car);
var del_1 = car.shift();
console.log(del_1);
console.log(car);

var del_2 = car.shift();
console.log(del_2);
console.log(car);

var del_3 = car.shift();
console.log(del_3);
console.log(car);


var join = [del_1 , del_2 , del_3];
console.log(join);