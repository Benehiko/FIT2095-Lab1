class Queue{
    constructor(){
        this.q = [];
    }

    // Get the current number of elements in the queue
    // Getter function
    get length(){
        return this.q.length;
    };

    // Get all the elements
    get queue(){
        return this.q;
    }

    // Boolean function: returns true if the queue is empty, false otherwise
    isEmpty(){
        return 0 == this.q.length;
    };

    // adds new element to the end of the queue
    enqueue(newItem){
        this.q.push(newItem);
    };

    // Boolean function returns true if an item is found (first occurrence); false otherwise
    inQueue(item){
        let i = 0;
        let isFound = false;

        while (i < this.q.length && !isFound){
            if (this.q[i] == item){
                isFound = true;
            }else
                i++;

        }
        return (isFound);
    }

    // Pop an item from the queue
    dequeue(){
        if (0 != this.q.length){
            let c = this.q[0];
            this.q.splice(0,1);
            return c;
        }
    };

    // Dequeue all in queue
    dequeueAll(){
        this.q = [];
        // or
        //this.q.length = 0;
    }

    // Add any number of elements to existing queue
    addElements(elements){
        this.q = this.q.concat(elements);
    }

    // Dequeue n number of elements in queue
    dequeueLim(limit){

        if (this.q.length < limit)
            return null;

        while (limit > 0){
            this.q.pop();
            limit--;
        }
    }

    // Give a nice formatted string output of the queue
    toString(){
        let out = "";
        for (let i=0; i < this.q.length; i++){
            out += i + " -> " + this.q[i] + "\n";
        }
        return out;
    }

};

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.addElements([22, 88]);
console.log('Before dequeue: '+queue.queue);
queue.dequeueLim(3);
console.log('After dequeue: '+queue.queue);
queue.addElements([44, 55, 66, 77]);
console.log(queue.toString());