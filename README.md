# jsx-babel-virtual-dom-dom

## How jsx convert to real Dom

- jsx ---> babel(AST) ---> pure js
- create / call react.createElement in tiny-react.js
- ---> generate virtualDom tree
- create / call react.vNodeToRNode and render
- append to real Dom
