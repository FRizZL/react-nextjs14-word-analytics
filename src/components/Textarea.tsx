import { ChangeEvent, ChangeEventHandler, useState } from "react";
import Warning from "./Warning";

export default function Textarea({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
  const [warningText, setWarningText] = useState("");

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = event.target.value;

    // Basic validation
    if (newText.includes("<script>")) {
      setText(newText.replace("<script>", ""));
      setWarningText("No script tags allowed");
      return;
    } else if (newText.includes("@")) {
      setText(newText.replace("@", ""));
      setWarningText("No email addresses allowed");
      return;
    } else {
      setWarningText("");
    }

    setText(newText);
  };
  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        className="textarea"
        placeholder="Enter your text"
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </>
  );
}
