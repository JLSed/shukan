import { MdAdd, MdSort } from "react-icons/md";
import QuestCard from "./QuestCard";
import type { QuestListType } from "../types/card";

type questListProps = {
  questHeader: string;
  questList: QuestListType[];
};

const QuestBoard = ({ questHeader, questList }: questListProps) => {

  return (
    <div className="border-style-1 flex flex-col gap-sm p-md ">
      <div className="flex header justify-between items-center">
        <MdAdd />
        <h1>{questHeader}</h1>
        <MdSort />
      </div>
      <div>
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
