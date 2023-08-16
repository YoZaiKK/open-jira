export interface Entry {
  _id: string;
  descrption: string;
  createdAt: number;
  status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';