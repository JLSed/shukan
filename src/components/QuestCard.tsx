import { MdCheck } from "react-icons/md";
import type { checklist } from "../types/card";
import { useState } from "react";

type Props = {
  cardHeader: string;
  cardDesc?: string;
  checkLists?: checklist[];
};

const QuestCard = ({ cardHeader, cardDesc, checkLists = [] }: Props) => {
  const [checklist, setChecklist] = useState<checklist[]>(checkLists);
  const toggleCheck = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  };
  return (
    <div className="card-active p-md">
      <div
        className={`flex items-center gap-md border-primary/20  ${checklist.length > 0 ? "border-b-2 pb-md" : ""}`}
      >
        <button
          disabled={checklist.length > 0}
          className="bg-transparent border-primary border-2 p-sm rounded-md disabled:opacity-30 max-h-8 text-transparent hover:text-light hover:bg-primary"
        >
          <MdCheck className="text-md " />
        </button>
        <div>
          <h1 className="subheader">{cardHeader}</h1>
          <p className="paragraph-1">{cardDesc}</p>
        </div>
      </div>
      {checklist.length > 0 && (
        <ul className="mt-md">
          {checklist.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-md py-sm text-primary"
            >
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => toggleCheck(item.id)}
                className="w-[26px] h-[26px] accent-primary text-light transition-all duration-200 rounded focus:outline-none"
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
