/*
 const book = {
     page : 4,
     width: 12
 }
   console.log(book.hasOwnProperty("page"))
   console.log(book.hasOwnProperty("pag"))
 */
 function book(page,width){
    if (page.hasOwnProperty(width)){
        return page[width];
    }
    else{
        return "not true"
    }
 }
 console.log(book({1:1,2:2,3:3},3))
