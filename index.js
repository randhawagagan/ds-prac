/*LINKED LISTS and 
12--> 5 --> 8 --> null
*/
// let linkedList = {
//   head : {
//     value: 12,
//     next: {
//       //pointer to next
//       value: 5, 
//       next: {
//         value: 8,
//         next : null
//       }
//     }
//   }//
// }
/*LINKED LISTS and 
12--> 5 --> 8 --> null
*/
// let linkedList = {
//   head : {
//     value: 12,
//     next: {
//       //pointer to next
//       value: 5, 
//       next: {
//         value: 8,
//         next : null
//       }
//     }
//   }//
// }
class Test{

}
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value){
   const newNode = {
     value : value,
     next: null
   }
   this.tail.next = newNode;
   this.tail = newNode;
   this.length++
   return this;
  }

 prepend(value){
   const newNode = {
     value : value,
     next: null
   }
   newNode.next = this.head;
   this.head = newNode;
   this.length++
   return this;
  }

  printList(){
    const llarray = [];
    let currentNode = this.head;
    while(currentNode !== null){
llarray.push(currentNode.value);
currentNode = currentNode.next;
    }
    return llarray;
  }

}
const LL = new LinkedList(12);
LL.append(5);
LL.append(16);
LL.append(17);
LL.prepend(4)
LL.printList();

/*
Google question forst recurring character

*/ 
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// function firstRecurringCharacter(input){
//     if(!input || input.length <= 1 ){
//       return undefined;
//     }
//     let map = new Map();
//     for(let i=0; i<input.length; i++){
//       //console.log(input[i])
//         if(map.has(input[i])){
//           return input[i]
//         }
//         map.set(input[i])
//     }
// }
// const array = [2,5,1,2,3,5,1,2,4];
// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))




 /* Hash Tables
 Downside of Hash table is that if we want all keys , it iterates over full lengthh to find out keys as its unordered.

 class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

   _hash(key) {
    let hash = 0;
    for(let i=0; i<key.length;i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
    }

    get(key){
      let address = this._hash(key);
      const currentBucket = this.data[address];

      for(let i=0; i<currentBucket.length ; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
        return undefined
      }
    }

    set(key, value){
      let address = this._hash(key);
      if(!this.data[address]){
        this.data[address] = [];
      }
      this.data[address].push([key,value])
      return this.data;
    }

    keys(){
         if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
    }
  }
const myHash = new HashTable(50);
myHash._hash("gagsan");
myHash.set('grapes', 100);
myHash.set('g', 1003333);
myHash.get('grapes');
myHash.get('g');
myHash.keys()
*/




 /* Merge Sorted arrays */






/* Reverse an array 
function reverse(str){
return str.split('').reverse().join(''); 
}
reverse('My name is Gagan')
*/

/* Implementing an array  

class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
     return this.length;
  }
  pop(){
    const last = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
    return last
  }
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index){
    for(let i=index; i< this.length - 1 ;i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1]
    this.length--;
  }
}
const myarr = new MyArray();
myarr.push("gagan")
myarr.push("jot")
myarr.push("randhawa")
myarr.delete(1);
console.log(myarr)
*/