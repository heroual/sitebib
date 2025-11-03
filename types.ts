
export enum Language {
  Darija = 'Moroccan Darija',
  Arabic = 'Standard Arabic',
  French = 'French',
}

export enum Role {
  User = 'user',
  Model = 'model',
}

export interface Message {
  role: Role;
  content: string;
}
