A pretty simple implementation of a linked list in JS to learn more about how they work.

## Current features
- Create linked list with `new LinkedList()`
- Append to linked list with `append(value)`
- Prepend to linked list with `prepend(value)`
- Get size of linked list with `size()`
- Get head node of linked list with `head()`
- Get tail node of linked list with `tail()`
- Return node at index with `at(index)` NOTE: Currently does not support negative indexing
- Remove last element of list with `pop()`
- Get string representation of linked list with `toString()`. Returns in the format of `( value ) -> ( value ) -> ( value ) -> null`

## Features not yet implemented
- Return true if value is found in the list with `contains(value)`
- Return index of node containing value or null if not found with `find(value)`
- Insert a new node with specified `value` at `index` with `insertAt(value, index)`
- Remove a node at specified `index` with `removeAt(index)`