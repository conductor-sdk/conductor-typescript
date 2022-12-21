import { TaskType, JoinTaskDef } from "../types";

export const joinTask = (
  taskReferenceName: string,
  joinOn: string[]
): JoinTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  joinOn,
  type: TaskType.JOIN,
});
