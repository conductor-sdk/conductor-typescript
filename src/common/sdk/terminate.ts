import { TaskType, TerminateTaskDef } from "../types";
export const terminateTask = (
  taskReferenceName: string,
  status: "COMPLETED" | "FAILED",
  terminationReason?: string
): TerminateTaskDef => ({
  name: taskReferenceName,
  taskReferenceName,
  inputParameters: {
    terminationStatus: status,
    terminationReason,
  },
  type: TaskType.TERMINATE,
});
