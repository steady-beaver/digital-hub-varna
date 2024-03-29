// global types

export type BookInfoT = {
  title: string;
  id: string;
  authors: string[];
  year: number;
  subjects: string[];
  publisher: string;
  excerpt: string;
};

export type CredentialsT = {
  email: string;
  password: string;
};

export type AuthT = {
  user: string;
  accessToken: string;
};
