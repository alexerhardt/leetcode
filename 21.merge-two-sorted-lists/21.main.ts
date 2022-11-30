/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export type ListNodeType = typeof ListNode;

export function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const ret = new ListNode();
    let cur = ret;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            cur.val = list2.val;
            list2 = list2.next;
        } else if (list2 === null) {
            cur.val = list1.val;
            list1 = list1.next;
        }
        else if (list1.val <= list2.val) {
            cur.val = list1.val;
            list1 = list1.next;
        } else if (list1.val > list2.val) {
            cur.val = list2.val;
            list2 = list2.next;
        }
        cur.next = new ListNode();
        cur = cur.next;
    }
    return ret;
}
