
        //map
       
            const myArray=[1,2,3,4];
            const myArrayTimesTwo = myArray.map((value,index,array)=>{
                return value * 2;
            });
          console.log(myArray);   // [1,2,3,4]
         console.log(myArrayTimesTwo); // [2,4,6,8]
            
            //filter
       

        
            const Array=[1,2,3,4];
            const myArrayTimes = myArray.filter((value,index,array)=>{
                return value % 2 ===0 ;
            });
          console.log(myArray); // [1,2,3,4]
            console.log(myArrayTimes); // [2,4]
            

      
        //reduce  nhận vào 1 mảng và tính toán thành một giá trị duy nhất 
        
            const Array1=[1,2,3,4];
            const  sum =  myArray.reduce((acc, currValue, currIndex, array)=>{
                return acc + currValue;
            },0);
            const avg =sum / Array1.length;
            console.log(avg); // [2.5]
            
       
            //find 
        
            const trees = [ 
             "birch", 
            "maple", 
            "oak", 
            "poplar" 
        ];

            const resultFind = trees.find(tree => tree.startsWith("m"));
      
          //some 
       
            const array = [1, 2, 3, 4, 5];
 
            // Hàm kiểm tra một phần tử có chia hết cho 2 hay không
            const even = (element) => element % 2 === 0;
  
            console.log(array.some(even));
            // output: true
      

       //>4. Give an example for add a new element to an array[] (at the end)?
        
            var arr = [
                "Hi",
                 "Hello",
                 "Bonjour"
                 //ChaoBan!
                    ];

                arr.push("ChaoBan!"); 

                console.log(arr);
       
      //5. Give an example for add a new element to an array[] (at the beginning)
       
            const array2 = [3, 2, 1]
            const newFirstElement = 4
            const newArray = [newFirstElement].concat(array2) // [ 4, 3, 2, 1 ]
            console.log(newArray);
       
        //6. Give an example for removing an element in array[]</h3>
       
            var ar = [1, 2, 3, 4, 5, 6];
             ar.pop(); //pop loại bỏ phần tử cuối [1, 2, 3, 4, 5]
            console.log( ar );
       

        //1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.</h3>
       
            function sumTriple (x, y) {
            if (x == y) {
            return 3 * (x + y);
                } 
            else {
                return (x + y);
                 }
                 }
            console.log(sumTriple(5, 10));
            console.log(sumTriple(5, 5));
            
       

        //2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
 
                
                     function diff_num(n) {
                        if (n <= 19) {
                            return (19 - n);
                            }
                        else{
                        return (n - 19) * 3;
                        }
                    }
                        console.log(diff_num(12));
                        console.log(diff_num(19));
                        console.log(diff_num(22));
               

              