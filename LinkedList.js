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

    size() {
        let currentSize = 0;
        let node = this.head;
        while(node != null) {
            currentSize++;
            node = node.nextNode;
        }
        return currentSize;
    }

    head() {
        return this.head;
    }

    tail() {
        if(this.head == null) {
            return null;
        }
        let node = this.head;
        while(node.nextNode != null) {
            node = node.nextNode;
        }
        return node;
    }

    at(index) {
        if(index >= this.size() || index < 0) {
            return null;
        }
        else {
            let node = this.head;
            for(let i = 0; i < index; i++) {
                node = node.nextNode;
            }
            return node;
        }
    }

    pop() {
        let node = this.head;
        while(node.nextNode.nextNode != null) {
            node = node.nextNode;
        }
        node.nextNode = null;
    }

    contains(value) {
        let node = this.head;
        while(node != null) {
            if(node.value == value) {
                return true;
            }
            else{
                node = node.nextNode;
            }
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let index = 0;
		while (node != null) {
			if (node.value == value) {
				return index;
			} else {
				node = node.nextNode;
                index++;
			}
		}
		return null;
    }

    insertAt(value, index) {
        if(index > this.size() || index < 0) {
            return;
        }
        else if(index == 0) {
            this.head = new Node(value, this.head);
            return;
        }
        let node = this.head;
        for(let i = 0; i < index - 1; i++) {
            node = node.nextNode;
        }
        node.nextNode = new Node(value, node.nextNode);
    }

    removeAt(index) {
        if(index >= this.size() || index < 0) {
            return;
        }
        else if(index == 0) {
            this.head = this.head.nextNode;
        }
        else {
            let node = this.head;
            for(let i = 0; i < index - 1; i++) {
                node = node.nextNode;
            }
            node.nextNode = node.nextNode.nextNode;
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

