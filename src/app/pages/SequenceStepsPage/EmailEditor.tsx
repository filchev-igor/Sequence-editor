import { EditorContent, Editor } from "@tiptap/react";
import MenuBar from "./MenuBar";

const EmailEditor = ({ editor }: { editor: Editor }) => (
  <>
    <MenuBar editor={editor} />
    <EditorContent editor={editor} />
  </>
);

export default EmailEditor;
