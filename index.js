/* Reverse an array */
function reverse(str){
return str.split('').reverse().join(''); 
}
reverse('My name is Gagan')

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