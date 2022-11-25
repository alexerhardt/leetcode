const mergeTwoSortedLists = require('./21.main.ts');
import { ListNode } from "./21.main";

function createLinkedListFromArray(arr: number[]): ListNode | null {
    if (arr.length === 0) {
        return null;
    }
    return new ListNode(arr[0], createLinkedListFromArray(arr.slice(1)));
}

const data = [

];

let testMap = new Map(data);

// @ts-ignore
for (let [key, value] of testMap.entries()) {
    // @ts-ignore
    test(`${key} = ${value}`, () => {
        // @ts-ignore
        expect(mergeTwoSortedLists(key)).toBe(value);
    });
}
