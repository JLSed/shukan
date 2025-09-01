export interface checklist {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface QuestListType {
  id?: string;
  title: string;
  description?: string;
  checklist: checklist[];
}
