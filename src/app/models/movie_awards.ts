import Realm from "realm";

export type movie_awards = {
  nominations?: number;
  text?: string;
  wins?: number;
};

export const movie_awardsSchema = {
  name: 'movie_awards',
  embedded: true,
  properties: {
    nominations: 'int?',
    text: 'string?',
    wins: 'int?',
  },
};
