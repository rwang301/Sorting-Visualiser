var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Sort from "../Sort.js";
export default class QuickSort extends Sort {
    constructor(listHtml, helper) {
        super(listHtml, helper);
    }
    sort() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.quickSort([...this.list]);
        });
    }
    quickSort(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            if (arr.length <= 1) {
                arr.length == 1 && this.helper.markDone(0, arr);
                return;
            }
            let index = yield this.partition(arr);
            this.helper.markDone(index, arr);
            yield this.quickSort(arr.slice(0, index));
            yield this.quickSort(arr.slice(index + 1, arr.length));
            return;
        });
    }
    partition(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            //just ensures that every value left of the pivot is smaller
            //and every value to the right is bigger (not necessarily sorted)
            let pivot = this.helper.getValue(0, arr);
            let i = 1, j = arr.length - 1;
            while (i < j) {
                while (this.helper.getValue(i, arr) <= pivot && i != j)
                    i++;
                while (this.helper.getValue(j, arr) > pivot && i != j)
                    j--;
                // swaps and styles
                if (i >= j)
                    break;
                yield this.helper.quickSwap(i, j, arr);
            }
            // means i == j
            // swap the pivot to it's sorted position
            // edge case in quick sort if first element is the largest
            // as i will be length and cause referenceerror in array
            let sortedPos = pivot > this.helper.getValue(i, arr) ? i : i - 1;
            yield this.helper.quickSwap(0, sortedPos, arr);
            return sortedPos;
        });
    }
    ;
}