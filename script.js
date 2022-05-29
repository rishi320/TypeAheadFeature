let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
//callback
//  const order = (Fruit_name, call_prod) =>{

//     setTimeout(()=>{
//         console.log(`Order placed for ${stocks.Fruits[Fruit_name]}`);
//         call_prod();
//     }, 2000)

//  }

//  const production = ()=>{
     
//      setTimeout(()=>{
//         //  console.log("this is a settimeout with zero seconds")
//          console.log("production statred");

//          setTimeout(()=>{
//              console.log("Fruits are chopped");

//              setTimeout(()=>{

//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`);

//                 setTimeout(()=>{
//                     console.log("Machine is started");

//                     setTimeout(()=>{
//                         console.log(`${stocks.holder[0]} is selected and ice cream is placed on it`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} are selected and added on top of ice cream`);

//                             setTimeout(()=>{
//                                 console.log("ice cream is served");
//                             },2000)
//                         },3000)
//                     }, 2000)
//                 }, 1000)
//              }, 1000)
//          }, 2000)
//         }, 0000);

//     }

