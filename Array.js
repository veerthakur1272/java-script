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

    let arr1=[3,5,2,4,9,7,8,6]
    for (let i of arr1){
        console.log(i)
    }


}
arr()