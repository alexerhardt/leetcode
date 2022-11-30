"use strict";
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
exports.__esModule = true;
exports.mergeTwoSortedLists = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function mergeTwoSortedLists(list1, list2) {
    var ret = new ListNode();
    var cur = ret;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            cur.val = list2.val;
            list2 = list2.next;
        }
        else if (list2 === null) {
            cur.val = list1.val;
            list1 = list1.next;
        }
        else if (list1.val <= list2.val) {
            cur.val = list1.val;
            list1 = list1.next;
        }
        else if (list1.val > list2.val) {
            cur.val = list2.val;
            list2 = list2.next;
        }
        cur.next = new ListNode();
        cur = cur.next;
    }
    return ret;
}
exports.mergeTwoSortedLists = mergeTwoSortedLists;
