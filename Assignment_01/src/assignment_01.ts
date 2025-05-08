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
//--------------------------------  Problem----04-----------------------------------
//--------------------------------  Problem----05-----------------------------------
//--------------------------------  Problem----06-----------------------------------
//--------------------------------  Problem----07-----------------------------------
//--------------------------------  Problem----08-----------------------------------