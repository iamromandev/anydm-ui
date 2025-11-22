import { createContextId } from "@builder.io/qwik";
const SelectContextId = createContextId("Select");
const groupContextId = createContextId("Select-Group");
const selectItemContextId = createContextId("Select-Option");
export {
  SelectContextId as default,
  groupContextId,
  selectItemContextId
};
