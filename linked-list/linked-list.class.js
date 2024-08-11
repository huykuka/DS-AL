class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedListClass {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //add to the end of the linked list by pointing the tail to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        if (!this.head) return null;
        if (this.length === 1) {
            this.head = {}
            this.tail = {}
            this.length = 0
        } else {
            let temp = this.head
            let pre = this.head
            this.findTail()
        }
        return this
    }

    findTail() {
        let temp = this.head
        let pre = this.head
        if (pre.next == null) {
            console.log('hello', temp)
            return temp
        } else {
            temp = pre.next
            console.log('hi', temp)
            pre.next = temp.next
            this.findTail()
        }
    }
}


const linkedList = new LinkedListClass(1);
linkedList.push(3).push(5).findTail()