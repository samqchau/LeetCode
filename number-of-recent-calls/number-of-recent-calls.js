/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 
 Time Complexity - O(n)
 Iterates through the entire pings array once.
 
 Space Complexity - O(n)
 Queue used to store pings. If all pings occur within 3000 miliseconds, the queue will have a maximum length equal to the length of the input.
 
*/

class RecentCounter {
    constructor(){
        this.count = 0
        this.queue = [];
    }
    
    ping(t) {
        while(Math.abs(t-this.queue[0]) > 3000) {
            this.queue.shift();
        }
        this.queue.push(t);
        return this.queue.length
    }
}