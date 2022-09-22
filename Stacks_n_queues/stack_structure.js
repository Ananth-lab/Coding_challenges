class Stacks{
    constructor(element){
        this.element = element;
        this.stack = [];
        this.size = 0;
        this.top = -1;
    }


    push(element){
        this.top += 1;
        this.stack[this.top] = element;
        this.size += 1;
    }

    pop(){
        this.top -= 1;
        this.size -= 1;
    }


    isEmpty(){
        if(!this.stack[this.top]){
            return true;
        }
        else{
            return false;
        }
    }


    peek(){
        return this.stack[this.top]
    }

    size(){
        return this.size;
    }


    print_elements(){
        return this.stack
    }
}



let obj = new Stacks();
console.log(obj.isEmpty());
obj.push(10)
obj.push(20)
console.log(obj.peek());
obj.push(15)
console.log(obj.isEmpty())
console.log(obj.size)
console.log(obj.print_elements())