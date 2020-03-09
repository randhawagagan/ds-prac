class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }
}
const myarr = new MyArray();
console.log(myarr)