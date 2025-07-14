import { MdAdd } from "react-icons/md";
import type { checklist } from "../types/card";
import { useState } from "react";

type Props = {
  cardHeader: string;
  cardDesc?: string;
  checkLists?: checklist[];
};

const QuestCard = ({ cardHeader, cardDesc, checkLists = [] }: Props) => {
  const [task, setTask] = useState<checklist[]>(checkLists);
  const toggleCheck = (id: number) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };
  return (
    <div className="card-active-1 p-md flex-col gap-md">
      <div
        className={`flex gap-md border-primary  ${task.length > 0 ? "border-b-2 pb-md" : ""}`}
      >
        <button
          disabled={task.length > 0}
          className="bg-primary p-sm rounded-sm disabled:opacity-30"
        >
          <MdAdd className="text-md text-light" />
        </button>
        <div>
          <h1 className="subheader-1">{cardHeader}</h1>
          <p className="paragraph-1">{cardDesc}</p>
        </div>
      </div>
      {task.length > 0 && (
        <ul className="mt-md">
          {task.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-md py-sm text-primary"
            >
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => toggleCheck(item.id)}
                className="w-[26px] h-[26px] accent-primary text-white transition-all duration-200 rounded focus:outline-none"
              />
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestCard;
