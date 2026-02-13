"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = collection_3.length - 1;
    const len1 = collection_1.length;
    const len2 = collection_2.length;
    while (i < len1 || j < len2 || k >= 0) {
        const val1 = i < len1 ? collection_1[i] : Infinity;
        const val2 = j < len2 ? collection_2[j] : Infinity;
        const val3 = k >= 0 ? collection_3[k] : Infinity;
        if (val1 <= val2 && val1 <= val3) {
            result.push(val1);
            i++;
        }
        else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            j++;
        }
        else {
            result.push(val3);
            k--;
        }
    }
    return result;
}
//# sourceMappingURL=merge.js.map