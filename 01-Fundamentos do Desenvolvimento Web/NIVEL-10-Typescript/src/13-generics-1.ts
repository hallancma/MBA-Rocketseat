/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T /*extends number | string*/ = string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState();
newState.get(); // undefined
newState.set("Pedro");
// newState.set(10);
// newState.set(123);
