class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(item){
        console.log(`Enqueue operation for ${this.items.push(item)}`);
        console.log(this.items)
    }
    dequeue(){
        console.log(`Dequeue operation on ${this.items.shift()}`);
    }
    size(){
        console.log(`The size of the stack is ${this.items.length}`)
    }
    peak(){
        console.log(`The front element is ${this.items[0]}`)
    }
    printit(){
        console.log(`Final Stack ${this.items}`)
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