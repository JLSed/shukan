export interface checklist {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface QuestListType {
  id?: string;
  title: string;
  rewardAmount: number;
  description?: string;
  checklist: checklist[];
}
