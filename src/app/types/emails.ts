import { Editor, JSONContent } from "@tiptap/react";

export type EmailsRawType = {
  id: number;
  subject: string;
  editor: Editor | null;
};

export type EmailsJsonType = {
  id: number;
  subject: string;
  editor: JSONContent | null;
};
