"use strict";
exports.__esModule = true;
var _21_main_1 = require("./21.main");
function createLinkedListFromArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    return new _21_main_1.ListNode(arr[0], createLinkedListFromArray(arr.slice(1)));
}
test("Creates a linked list from a 3-long array", function () {
    var _a, _b, _c, _d, _e;
    var arr = [3, 7, 8];
    var linkedList = createLinkedListFromArray(arr);
    expect(linkedList === null || linkedList === void 0 ? void 0 : linkedList.val).toBe(3);
    expect((_a = linkedList === null || linkedList === void 0 ? void 0 : linkedList.next) === null || _a === void 0 ? void 0 : _a.val).toBe(7);
    expect((_c = (_b = linkedList === null || linkedList === void 0 ? void 0 : linkedList.next) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.val).toBe(8);
    expect((_e = (_d = linkedList === null || linkedList === void 0 ? void 0 : linkedList.next) === null || _d === void 0 ? void 0 : _d.next) === null || _e === void 0 ? void 0 : _e.next).toBe(null);
});
test("Merges two lists of the same length", function () {
    var listA = createLinkedListFromArray([1, 2, 4]);
    var listB = createLinkedListFromArray([1, 3, 4]);
    var merged = (0, _21_main_1.mergeTwoSortedLists)(listA, listB);
    console.log('merged: ', merged);
    var expected = [1, 1, 2, 3, 4, 4];
    var cur = merged;
    var i = 0;
    while (cur !== null && i < expected.length - 1) {
        expect(cur.val).toBe(expected[i]);
        cur = cur.next;
        i++;
    }
    expect(i).toBe(expected.length - 1);
});
test("Merges lists of different lengths", function () {
    var listA = createLinkedListFromArray([1, 7, 10]);
    var listB = createLinkedListFromArray([2, 5]);
    var merged = (0, _21_main_1.mergeTwoSortedLists)(listA, listB);
    var expected = [1, 2, 5, 7, 10];
    var cur = merged;
    var i = 0;
    while (cur !== null && i < expected.length - 1) {
        expect(cur.val).toBe(expected[i]);
        cur = cur.next;
        i++;
    }
    expect(i).toBe(expected.length - 1);
});
test("Merges an empty list with a non-empty list", function () {
    var listA = createLinkedListFromArray([3]);
    var listB = createLinkedListFromArray([]);
    var merged = (0, _21_main_1.mergeTwoSortedLists)(listA, listB);
    var expected = [3];
    var cur = merged;
    var i = 0;
    while (cur !== null && i < expected.length - 1) {
        expect(cur.val).toBe(expected[i]);
        cur = cur.next;
        i++;
    }
    expect(i).toBe(expected.length - 1);
});
test("Merges two empty lists", function () {
    var listA = createLinkedListFromArray([]);
    var listB = createLinkedListFromArray([]);
    var merged = (0, _21_main_1.mergeTwoSortedLists)(listA, listB);
    expect(merged).toBe(null);
});
