/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function dailyTemperatures(temperatures: number[]): number[] {
    let stack = []; let days = new Array(temperatures.length);
    for(let i = 0; i < temperatures.length; i++) {
        let t = temperatures[i];
        while(stack.length > 0 && stack[stack.length - 1].temp < t) {
            let {temp, idx} = stack.pop();
            days[idx] = i - idx;
        }
        stack.push({temp: t, idx: i});
    }
    while(stack.length > 0) {
        let {temp, idx} = stack.pop();
        days[idx] = 0;
    }
    return days
};