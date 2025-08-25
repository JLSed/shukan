export interface checklist {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface QuestListType {
  id?: number;
  title: string;
  description?: string;
  checklist: checklist[];
}
