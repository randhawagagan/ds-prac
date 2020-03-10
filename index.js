 /* Hash Tables  */
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
  }
const myHash = new HashTable(50);
myHash._hash("gagsan");
myHash.set('grapes', 100);
myHash.set('g', 1003333);
myHash.get('grapes');
myHash.get('g');

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