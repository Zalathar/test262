// Copyright (C) Copyright 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 19.4.3
description: >
    Symbol prototype
---*/
assert.sameValue(
    Object.getPrototypeOf(Symbol('66')),
    Symbol.prototype,
    "`Object.getPrototypeOf(Symbol('66'))` returns `Symbol.prototype`"
);
