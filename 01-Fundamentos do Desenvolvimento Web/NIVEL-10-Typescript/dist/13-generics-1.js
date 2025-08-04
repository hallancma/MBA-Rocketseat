"use strict";
/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */
Object.defineProperty(exports, "__esModule", { value: true });
function useState() {
    let state;
    function get() {
        return state;
    }
    function set(newValue) {
        state = newValue;
    }
    return { get, set };
}
let newState = useState();
newState.get(); // undefined
newState.set("Pedro");
// newState.set(10);
// newState.set(123);
//# sourceMappingURL=13-generics-1.js.map