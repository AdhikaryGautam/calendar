import { ObjectDto } from "@/types/common.types";
import { getLocalStorage, setLocalStorage } from "@/utils/common.utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const CalendarNotes = ({ data }: { data: ObjectDto }) => {
  const [note, setNote] = useState(getLocalStorage(data?.ad) || "");

  const [isEditing, setIsEditing] = useState(!getLocalStorage(data?.ad));

  const storedNotes = getLocalStorage(data?.ad);

  const handleSaveNote = () => {
    setLocalStorage(data?.ad, note);
    setIsEditing(false);
  };

  return (
    <div className="pl-4 text-sm">
      <p className="font-semibold">Notes</p>

      {!isEditing && (
        <div className="mt-2">
          <p>{storedNotes}</p>

          <Button size="xs" className="mt-2" onClick={() => setIsEditing(true)}>
            Edit Note
          </Button>
        </div>
      )}

      {isEditing && (
        <div className="mt-2 flex flex-col gap-2">
          <Textarea
            placeholder="Type your message here."
            value={note}
            rows={2}
            onChange={(e) => setNote(e.target.value)}
          />
          <Button size="xs" onClick={handleSaveNote}>
            Add Note
          </Button>
        </div>
      )}
    </div>
  );
};
