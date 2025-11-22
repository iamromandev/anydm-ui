"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const qwik = require("@builder.io/qwik");
const SelectContextId = qwik.createContextId("Select");
const groupContextId = qwik.createContextId("Select-Group");
const selectItemContextId = qwik.createContextId("Select-Option");
exports.default = SelectContextId;
exports.groupContextId = groupContextId;
exports.selectItemContextId = selectItemContextId;
