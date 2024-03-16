import { StepperStatus, StepperProps } from "../../types/stepper";

export const sequenceStepperSteps: StepperProps = [
  {
    title: "Name & Product",
    subtitle: "Provide sequence name & product",
    status: StepperStatus.COMPLETED,
  },
  {
    title: "Sequence steps",
    subtitle: "Create sequence steps for your sequence",
    status: StepperStatus.IN_PROGRESS,
  },
  {
    title: "Summary",
    subtitle: "Summary of your sequence",
    status: StepperStatus.NOT_STARTED,
  },
];
