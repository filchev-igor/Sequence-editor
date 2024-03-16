import { StepperStatus, StepperProps } from "../../types/stepper";

export const sequenceStepsPageStepper: StepperProps = [
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

export const sequenceSummaryPageStepper: StepperProps = [
  {
    title: "Name & Product",
    subtitle: "Provide sequence name & product",
    status: StepperStatus.COMPLETED,
  },
  {
    title: "Sequence steps",
    subtitle: "Create sequence steps for your sequence",
    status: StepperStatus.COMPLETED,
  },
  {
    title: "Summary",
    subtitle: "Summary of your sequence",
    status: StepperStatus.IN_PROGRESS,
  },
];
