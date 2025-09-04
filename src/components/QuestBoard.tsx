import { MdAdd, MdSort } from "react-icons/md";
import QuestCard from "./QuestCard";
import { useTaskContext } from "../providers/TaskProvider";

type QuestBoardProps = {
  questHeader: string;
};

const QuestBoard = ({ questHeader }: QuestBoardProps) => {
  const { tasks, isLoading } = useTaskContext();



  return (
    <div className="border-style-1 flex flex-col gap-sm p-md ">
      <div className="flex header justify-between items-center">
        <MdAdd />
        <h1>{questHeader}</h1>
        <MdSort />
      </div>
      <div>
      </div>
      {isLoading ? (
        <div className="flex flex-col gap-sm">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-md card-active p-md">
              <div className="w-7 h-7 bg-primary rounded-md animate-pulse"></div>
              <h1 className="subheader animate-pulse">Fetching data...</h1>
            </div>
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="flex center h-full">
          <h1 className="header text-primary/50">No Data Found.</h1>
        </div>
      ) : (
        <div className="flex flex-col gap-sm">
          {
            tasks.map((quest) => (
              <QuestCard
                key={quest.id}
                cardHeader={quest.title}
                cardDesc={quest.description}
                checkLists={quest.checklist}
                rewardAmount={quest.rewardAmount}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default QuestBoard;
