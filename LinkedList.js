export default class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    append(value) {
        if(this.head == null) {
            this.prepend(value);
        }
        else {
            let temp = this.head;
            while(temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }

    toString() {
        let string = ``;
        if(this.head.value == null) {
            return `null`;
        }
        else {
            string = `( ${this.head.value} ) -> `
            let node = this.head.nextNode;
            while(node != null) {
                string = `${string} ( ${node.value} ) -> `;
                node = node.nextNode;
            }
            string = `${string} null`;
            return string;
        }
    }
}

class Node {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

