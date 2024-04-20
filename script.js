class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
            return 0;
        }
        this._tail.next = newNode;
        this._tail = newNode;
        return 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
            return 0;
        }
        newNode.next = this._head;
        this._head = newNode;
        return 0;
    }

    get size() {
        let count = 0;
        let curr = this._head;
        
        while (curr) {
            count++;
            curr = curr.next;
        }
        
        return count;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            console.log("Index out of bounds");
            return null;
        }
    
        let count = 0;
        let curr = this._head;
    
        while (count < index) {
            count++;
            curr = curr.next;
        }
    
        return curr;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
    
        if (this.size === 1) {
            this._head = null;
            this._tail = null;
            return;
        }
    
        let curr = this._head;
        while (curr.next !== this._tail) {
            curr = curr.next;
        }
    
        curr.next = null;
        this._tail = curr; 
    }

    contains(value) {
        let curr = this._head;
    
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
    
        return false;
    }
    
    find(value) {
        let curr = this._head;
        let currIndex = 0;
    
        while (curr) {
            if (curr.value === value) {
                return currIndex;
            }
            currIndex++;
            curr = curr.next;
        }
        return null;  // Return null if the value is not found
    }

    toString() {
        if (this.size === 0) {
            return "";
        }
        
        let curr = this._head;
        let listConverted = "";
    
        while (curr) {
            listConverted += curr.value.toString() + " -> ";
            curr = curr.next; // Move to the next node
        }
    
        // making the tail point to null
        listConverted += "null";
    
        return listConverted;
    }
}

class Node {
    constructor (value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}
