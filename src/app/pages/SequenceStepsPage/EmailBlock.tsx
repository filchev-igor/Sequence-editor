import EnvelopeSVG from "../../components/SVG/EnvelopeSVG.tsx";
import { ReactElement } from "react";

const EmailBlock = ({
  subject,
  onSubjectChange,
  children,
}: {
  subject: string;
  onSubjectChange: (newSubject: string) => void;
  children: ReactElement;
}) => (
  <div className={"border rounded mb-4"}>
    <div className={"border-b flex p-3 items-center"}>
      <div className={"border rounded p-1 mr-2"}>
        <EnvelopeSVG />
      </div>

      <div className={"font-bold"}>Initial e-mail</div>
    </div>

    <div className={"border-b"}>
      <input
        className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Subject"
        value={subject}
        onChange={(e) => onSubjectChange(e.target.value)}
      />
    </div>

    <div>{children}</div>
  </div>
);

export default EmailBlock;
