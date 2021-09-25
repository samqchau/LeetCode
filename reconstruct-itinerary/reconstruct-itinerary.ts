/*
    Time Complexity - O(v+e)
    -DFS traversal visits every vertex and edge.
    -Reverse iternerary O(n)
    -Sort edges by letter (eloge)
    
    Space Complexity - O(v + e)
    Map used to store all nodes and edges.
    Recursive calls O(v)
*/
function findItinerary(tickets: string[][]): string[] {
    let map = {};
    for(let i = 0; i < tickets.length; i++) {
        let from = tickets[i][0]
        let to = tickets[i][1];
        if(!map[from]) map[from] = [to];
        else map[from].push(to);
    }
    
    for(const key of Object.keys(map)) {
        map[key].sort();
    }
    
    let res = [];
    
    function dfsHelper(airport) {
        let destinations = map[airport];
        while(destinations && destinations.length) {
            dfsHelper(destinations.shift())
        }
        res.push(airport);        
    }
    
    dfsHelper("JFK");
    return res.reverse();
};