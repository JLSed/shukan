import { MdAdd, MdFormatListBulletedAdd, MdSort } from "react-icons/md";
import QuestCard from "./QuestCard";
import type { checklist, QuestListType } from "../types/card";

type Props = {
  questHeader: string;
  questList: QuestListType[];
};

const QuestBoard = ({ questHeader, questList }: Props) => {
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
      {
        questList.map((quest) => (
          <QuestCard
            cardHeader={quest.title}
            cardDesc={quest.description}
            checkLists={quest.checklist}
          />
        ))}
    </div>
  );
};

export default QuestBoard;
