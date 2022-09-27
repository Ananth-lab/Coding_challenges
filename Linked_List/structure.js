class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size += 1;
    }

    insertLast(data){
        let node = new Node(data)
        if(!this.head){
            this.head = node;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size += 1;
    }

    insertAtIndex(data, index){
        if(index == 0){
            this.head = new Node(data, this.head);
        }


        else{
            let count = 0;
            let node = new Node(data);
            let previous,current;
            current = this.head;
            while(count < index){
                previous = current;
                count += 1;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
    }

    deleteAtIndex(index){
        if(index == 0){
            this.head = this.head.next;
        }
        else{
        let count = 0;
        let current = this.head;
        while(count < index-1){
            current = current.next;
            count += 1;
        }
        current.next = current.next.next;
    }
    this.size -= 1;
    }


    getSize(){
        console.log(this.size)
    }

    clearList(){
        this.head = null;
        this.size = 0;
    }
    printList(){
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
}


let ll = new LinkedList()
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertLast(500);
ll.insertAtIndex(700,0)
ll.deleteAtIndex(5);
ll.clearList()
ll.printList()
ll.getSize()
