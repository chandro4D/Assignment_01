//--------------------------------  Problem----01-----------------------------------
function formatString(name:string, toUpper?:boolean):string {
    if(toUpper == true || toUpper == null){
        return name.toUpperCase();
    }
    else{
        return name.toLowerCase();
    }
}
// console.log(formatString("chandra shekhor mondal"));

//--------------------------------  Problem----02-----------------------------------
// Description: Create a function that filters an array of objects by the rating property, 
// returning only items with a rating of 4 or more.

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 3.0 },
    { title: "Book D", rating: 4.0 },
    { title: "Book E", rating: 4.5 }
    
  ];
function filterByRating(items: { title: string; rating: number }[]){
    const result=[];
    for(const book of items){
       if(book.rating >= 4){
        result.push(book);
       }
    }
    return result;
}
// console.log(filterByRating(books));



//--------------------------------  Problem----03-----------------------------------
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays<T>(...arrays: T[][]): T[]{
    return ([] as T[]).concat(...arrays);
}
// console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));
// console.log(concatenateArrays<string>(["a", "b"], ["c"]));



//--------------------------------  Problem----04-----------------------------------
class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
//   console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
//   console.log(myCar.getModel());  // Output: "Model: Corolla"
  
//--------------------------------  Problem----05-----------------------------------
// Description: Write a function that takes a string | number and returns:

function processValue(value: string | number): number{
    if(typeof value == "string"){
        return value.length;
    }else{
        return value*2;
    }
}
// console.log(processValue(5));


//--------------------------------  Problem----06-----------------------------------
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensive = products[0];
  
    for (const product of products) {
      if (product.price > mostExpensive.price) {
        mostExpensive = product;
      }
    }
  
    return mostExpensive;
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
//   console.log(getMostExpensiveProduct(products));
  
//--------------------------------  Problem----07-----------------------------------
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
//   console.log(getDayType(Day.Monday));
//   console.log(getDayType(Day.Sunday));
//   getDayType(Day.Monday);
//   getDayType(Day.Sunday);  
//--------------------------------  Problem----08-----------------------------------

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      return Promise.reject(new Error("Negative number not allowed"));
    }
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
  
  squareAsync(4).then(console.log); 
  