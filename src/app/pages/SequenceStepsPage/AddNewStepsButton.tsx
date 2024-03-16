import useEditorData from "../../utils/usePageTitle/useEditorData.ts";
import { Editor } from "@tiptap/react";

const AddNewStepsButton = ({
  onAddNewBlock,
}: {
  onAddNewBlock: (newEditor: Editor | null) => void;
}) => {
  const editor = useEditorData();

  return (
    <div className={"grid place-items-center"}>
      <button
        type={"button"}
        className={"border border-gray-200 inline-flex items-center"}
        onClick={() => onAddNewBlock(editor)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        <span>Add new step</span>
      </button>
    </div>
  );
};

export default AddNewStepsButton;
