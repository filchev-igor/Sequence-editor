import { StepperStatus } from "../../types/stepper.ts";
import CheckSVG from "../SVG/CheckSVG.tsx";
import StopCircleSVG from "../SVG/StopCircleSVG.tsx";

const StepperIcon = ({ status }: { status: StepperStatus }) => {
  if (status === StepperStatus.COMPLETED) {
    return <CheckSVG />;
  }

  return <StopCircleSVG />;
};

export default StepperIcon;
