import { MdAdd, MdFormatListBulletedAdd, MdSort } from "react-icons/md";
import QuestCard from "./QuestCard";
import type { checklist } from "../types/card";

type Props = {
  questHeader: string;
};

const QuestList = ({ questHeader }: Props) => {
  const sampleChecklists: checklist[] = [
    { id: 1, title: "Walk the dog", isChecked: false },
    { id: 2, title: "Write code", isChecked: true },
  ];

  return (
    <div className="border-style-1 flex flex-col gap-md p-md max-w-80">
      <div className="flex header-1 justify-between items-center">
        <MdAdd />
        <h1>{questHeader}</h1>
        <MdSort />
      </div>
      <div>
        <div className="flex subheader-1 items-center gap-md bg-primary/10 p-md py-sm rounded-sm">
          <MdFormatListBulletedAdd className="text-primary/50" />
          <input placeholder="Add new task" className="outline-0" />
        </div>
      </div>
      <QuestCard
        cardHeader="Take a short Break."
        cardDesc="Watch TV, play a game, eat a treat, it's up to you! it's up to you!"
        checkLists={sampleChecklists}
      />
      <QuestCard cardHeader="Second Quest" />
    </div>
  );
};

export default QuestList;
