//// [ES5SymbolProperty6.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
(new (function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return C.prototype[Symbol.iterator] = function() {}, C;
}()))[Symbol.iterator];
