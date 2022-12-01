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
    if (list1 === null && list2 === null) {
        return null;
    }
    const ret = new ListNode();
    let cur = ret;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            cur.val = list2.val;
            list2 = list2.next;
        } else if (list2 === null) {
            cur.val = list1.val;
            list1 = list1.next;
        } else if (list1.val <= list2.val) {
            cur.val = list1.val;
            list1 = list1.next;
        } else if (list1.val > list2.val) {
            cur.val = list2.val;
            list2 = list2.next;
        }
        if (list1 !== null || list2 !== null) {
            cur.next = new ListNode();
            cur = cur.next;
        } else {
            cur.next = null;
        }
    }
    return ret;
}

/**
 * Two better solutions, keys:
 * - Use recursion
 * - Make better use of the existing data structure, and the fact that it's
 * sorted
 *
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (list1 === null) { return list2 }
//     if (list2 === null) { return list1 }
//
//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2
//     }
// };
//
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const mergedHead: ListNode = new ListNode(-1, null);
//     let prev: ListNode = mergedHead;
//
//     while (list1 && list2) {
//         if (list1.val <= list2.val) {
//             prev.next = list1;
//             list1 = list1.next;
//         } else {
//             prev.next = list2;
//             list2 = list2.next;
//         }
//         prev = prev.next;
//     }
//     prev.next = list1 ? list1 : list2;
//
//     return mergedHead.next;
// };
