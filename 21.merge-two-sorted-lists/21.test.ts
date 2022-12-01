import { ListNode, mergeTwoSortedLists } from "./21.main";

function createLinkedListFromArray(arr: number[]): ListNode | null {
    if (arr.length === 0) {
        return null;
    }
    return new ListNode(arr[0], createLinkedListFromArray(arr.slice(1)));
}

test("Creates a linked list from a 3-long array", () => {
    const arr = [3, 7, 8];
    const linkedList = createLinkedListFromArray(arr);
    expect(linkedList?.val).toBe(3);
    expect(linkedList?.next?.val).toBe(7);
    expect(linkedList?.next?.next?.val).toBe(8);
    expect(linkedList?.next?.next?.next).toBe(null);
})

test("Merges two lists of the same length", () => {
    const listA = createLinkedListFromArray([1, 2, 4]);
    const listB = createLinkedListFromArray([1, 3, 4]);

    const merged = mergeTwoSortedLists(listA, listB);
    console.log('merged: ', merged);

    const expected = [1,1,2,3,4,4];

    let cur = merged;
    let i = 0;

    while(cur !== null && i < expected.length - 1) {
        expect(cur.val).toBe(expected[i]);
        cur = cur.next;
        i++;
    }

    expect(i).toBe(expected.length - 1);
    expect(cur?.next).toBe(null);
})

test("Merges lists of different lengths", () => {
    const listA = createLinkedListFromArray([1, 7, 10]);
    const listB = createLinkedListFromArray([2, 5]);
    const merged = mergeTwoSortedLists(listA, listB);

    const expected = [1, 2, 5, 7, 10];

    let cur = merged;
    let i = 0;

    while(cur !== null && i < expected.length - 1) {
        expect(cur.val).toBe(expected[i]);
        cur = cur.next;
        i++;
    }

    expect(i).toBe(expected.length - 1);
    expect(cur?.next).toBe(null);
})

test("Merges an empty list with a non-empty list", () => {
    const listA = createLinkedListFromArray([3]);
    const listB = createLinkedListFromArray([]);
    const merged = mergeTwoSortedLists(listA, listB);

    const expected = [3];

    let cur = merged;
    let i = 0;

    while(cur !== null && i < expected.length - 1) {
        expect(cur.val).toBe(expected[i]);
        cur = cur.next;
        i++;
    }

    expect(i).toBe(expected.length - 1);
    expect(cur?.next).toBe(null);
})

test("Merges two empty lists", () => {
    const listA = createLinkedListFromArray([]);
    const listB = createLinkedListFromArray([]);
    const merged = mergeTwoSortedLists(listA, listB);

    expect(merged).toBe(null);
})



