interface Item {
  resourceURI: string;
  name: string;
}

interface ListItems {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<Item>;
}

interface Thumbail {
  path: string;
  extension: string;
}

export interface Character {
  name: string;
  id: number;
  description: string;
  modified: Date;
  resourceURI: string;
  thumbnail: Thumbail;
  comics: ListItems;
  series: ListItems;
  stories: ListItems;
  events: ListItems;
  attributionText: string;
  [key: string]: any;
}
