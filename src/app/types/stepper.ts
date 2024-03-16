export enum StepperStatus {
  COMPLETED = "Completed",
  IN_PROGRESS = "In progress",
  NOT_STARTED = "Not started",
}

export type StepperProps = {
  title: string;
  subtitle: string;
  status: StepperStatus;
}[];
