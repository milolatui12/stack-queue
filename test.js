class AStack {
    constructor() {
      this.data = new DoublyLinkedList();
    }
  
    isEmpty() {
      return this.data.head === null;
    }
  
    push(item) {
        this.data.insertAtHead(item);
        return true;
    }
  
    pop() {
        if (this.isEmpty()) return undefined;
        return this.data.deleteAtTail()
    }
}

class AQueue {
    constructor() {
      this.data = new DoublyLinkedList();
      this.size = 0;
    }
  
    isEmpty() {
      return this.data.head === null;
    }
  
    enqueue(item) { 
      this.data.insertAtHead(item);
      return true;
    }
  
    dequeue() {
      if (this.isEmpty()) return undefined;
      return this.data.deleteAtHead();
    }
    loop() {
        this.data.loop();
    }
}

function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.insertAtHead = function(value) {
    if (this.tail === null) { 
        this.tail = new DoublyLinkedListNode(value);
        this.head = this.tail;
    } else {
        let temp = new DoublyLinkedListNode(value);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
}

DoublyLinkedList.prototype.deleteAtTail= function() {
    var toReturn = null;
    if (this.tail !== null) {
        toReturn = this.tail.data;
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.size--;
    return toReturn;
}
DoublyLinkedList.prototype.deleteAtHead = function() {
    var toReturn = null;
    if (this.head !== null) {
        toReturn = this.head.data;
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }   
    }
    this.size--;
    return toReturn;
}
DoublyLinkedList.prototype.loop  = function() {
    let currentHead = this.head;
    while(currentHead.next) {
        outputArr.push(currentHead.data);
        currentHead = currentHead.next; 
    }
    outputArr.push(currentHead.data);
}




let input = document.getElementById('input');
let submitBtn = document.getElementById('submitbtn');
let checkBtn = document.getElementById('checkbtn');
let delBtn = document.getElementById('delbtn');
let printBtn = document.getElementById('printbtn');
let output = document.getElementById('output');
let outStack = document.getElementById('stack');
let pStack = document.getElementById('pstack');
let p = document.getElementById('p');
let outputArr = [];
let queue = new AQueue();
let stack = new AStack();

function print(root, data) {
    p.innerHTML = "";
    p.appendChild(document.createTextNode(data));
    root.appendChild(p);
    outputArr = [];
}


stack.push('E');
stack.push('A');
stack.push('S');
outputArr.push(stack.pop());
stack.push('Y');
outputArr.push(stack.pop());
outputArr.push(stack.pop());
stack.push('Q');
stack.push('U');
stack.push('E');
outputArr.push(stack.pop());
outputArr.push(stack.pop());
outputArr.push(stack.pop());
outputArr.push(stack.pop());
stack.push('S');
stack.push('T');
outputArr.push(stack.pop());
outputArr.push(stack.pop());
outputArr.push(stack.pop());
stack.push('I');
outputArr.push(stack.pop());
stack.push('O');
stack.push('N');

print(outStack, outputArr);

submitBtn.addEventListener("click", function() {
    queue.enqueue(input.value);
    input.value = '';
})
checkBtn.addEventListener("click", function() {
    if(queue.isEmpty()) {
        print(output, "empty");
    } else {
        print(output, "no empty");
    }
})
delBtn.addEventListener("click", function() {
    let temp;
    if(!queue.isEmpty()) {
        temp = queue.dequeue();
    }
})
printBtn.addEventListener("click", function() {
    queue.loop();
    print(output, outputArr);
})