function arr(){

    // let Fruits=["Apple","Mango","Bananna","Grapes"]
    // Fruits.pop(); //remove last element (Grapes)
    // Fruits.pop();  //remove second last (banana)
    // document.write(Fruits)

    // let ans=Fruits.push("orange","Pineapple")
    // document.write(ans) //return updated length
    // document.write(Fruits) //update array

    // Fruits.shift()  //remove fist element
    // document.write(Fruits)  //updated array

    // Fruits.unshift("orange ,12") //adds in starting
    // document.write(Fruits)

    // let ans=Fruits.length;
    // document.write(ans)  //4

    // let arr1=[3,5,2,4,9,7]
    // let arr2=[4,5,6]

    // let final=arr1.concat(arr2)
    // document.write(final)

    // let ans=arr1.sort()  //give in ascending order
    // document.write(ans)
    
    // let ans=arr1.reverse()
    // document.write(ans)  //reverse the array

    // let ans=arr1.sort().reverse()
    // document.write(ans)  //give in decending order

    // let arr1=[3,5,2,4,9,7,8,6]
    // let ans=arr1.slice(0,-1)
    // document.write(ans)
    
    // let arr1=[3,5,2,4,9,7,8,6]   //from where to add , how many number 
    // arr1.splice(2,0,25,35,65)
    // document.write(arr1)

    // let arr1=[3,5,2,4,9,7,8,6]
    // let ans=arr1.map(function(num){
    //     return num*2;
    // })
    // console.log(ans);

    // let arr1=[3,5,2,4,9,7,8,6]
    // let ans=arr1.filter(function(num){
    //     return num%2==0;
    // })
    // console.log(ans);

    // let arr1=[3,5,2,4,9,7,8,6]
    // let ans=arr1.forEach(function(num){
    //     console.log(num*2);
    // })

    // let arr1=[3,5,2,4,9,7,8,6]
    // for (let i of arr1){
    //     console.log(i)
    // }
}
arr()






// // function num(){

// // }

// // num()

// let num=()=>{
    

//     let arr=[2,6,64,8,34,9]
  
//     // let ans=arr.map(function(num){
//     //   return num*2
//     // })
  
//     // let ans2=arr.map((num)=>{
//     //   return num*2
//     // }) 
  
//     // let ans=arr.sort((a,b)=>a-b)
//     // ans.reverse();
//     // console.log(ans);
    
  
//     // let ans1=arr.map((num)=> num*2) 
  
//     // let ans2=arr.filter((num)=>{
//     //   return num>5;
//     // })
  
//     // console.log(ans2);
    
  
//   }
//   num()
  
  
  
//   let go=(a,b)=>{
      
//       return a+b
  
//   }
  
//   console.log( go(7,8));


let go=()=>{
    console.log("hello new ")
    let newarr=[2,5,7,3,9,1]
    let newarray= newarr.map(function(okk){
        return okk+2;
    })
    let newarray2=newarr.map((okk)=>okk+2)
    console.log(newarray2);
}
go()