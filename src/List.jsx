import { React } from "./tiny-react";

const List = () => (
  <ul id="list">
    {["item_1", "item_2", "item_3"].map(p => <li class="item">{p}</li>)}
  </ul>
);
export { List };

// babel will analyse jsx AST to convert to above to js below

// const List = () => React.createElement(
//   "ul",
//   { id: "list" },
//   ["item_1", "item_12", "item_3"].map(p => React.createElement(
//     "li",
//     { "class": "item" },
//     p
//   ))
// );
// export { List };