import { MdAdd, MdSort } from "react-icons/md";
import QuestCard from "./QuestCard";
import type { QuestListType } from "../types/card";

type questListProps = {
  questHeader: string;
  questList: QuestListType[];
  isLoading: boolean;
};

const QuestBoard = ({ questHeader, questList, isLoading }: questListProps) => {

  return (
    <div className="border-style-1 flex flex-col gap-sm p-md ">
      <div className="flex header justify-between items-center">
        <MdAdd />
        <h1>{questHeader}</h1>
        <MdSort />
      </div>
      <div>
      </div>
      {isLoading ?
        <div className="flex flex-col gap-sm">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card-active h-15 bg-primary rounded-md animate-pulse">


            </div>
          ))}
        </div> :
        <div className="flex flex-col gap-sm">
          {
            questList.map((quest) => (
              <QuestCard
                key={quest.id}
                cardHeader={quest.title}
                cardDesc={quest.description}
                checkLists={quest.checklist}
              />
            ))}
        </div>}
    </div>
  );
};

export default QuestBoard;
