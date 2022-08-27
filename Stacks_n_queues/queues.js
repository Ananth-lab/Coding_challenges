class Node{
    constructor(value){
      this.value=value;
      this.next = null;
    }
}
   
class Queue{
    constructor(){
      this.front = null;
      this.rear = null;
    }
    isEmpty(){
      return !this.front;
    }
    enqueue(value){
      console.log("Enqueue",value)
      let node = new Node(value);
      if(this.isEmpty()){
        this.front = this.rear = node;
      }
      else{
        this.rear.next = node;
        this.rear = node;
      }
      this.print();
    }
    print(){
      if(this.isEmpty()){
        console.log("Empty QUEUE")
      }
      else{
        let tempArr =[];
        let temp = this.front;
        while(temp){
          tempArr.push(temp.value);
          temp = temp.next;
        }
        console.log(tempArr.join(','))
      }
    }
    dequeue(){
      let node = this.front;
      console.log("Dequeue", node ? node.value : "")
      if(!this.isEmpty()){
        this.front = this.front.next;
      }
      if(!this.front){
        this.rear = null;
      }
      this.print();
       return node;
    }
    size(){
      if(this.isEmpty()){
        console.log("Size is 0")
      }
      else{
        let tempArr =[];
        let temp = this.front;
        while(temp){
          tempArr.push(temp.value);
          temp = temp.next;
        }
        console.log(`The length of the array is ${tempArr.length}`)
      }
    }
    peak(){
      console.log(`the front element is ${this.front.value}`)
    }
  }
  let q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.peak()
  q.enqueue(3);
  q.size();
  q.dequeue();
  q.dequeue();
  q.dequeue();







  