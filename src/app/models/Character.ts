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
  [key: string]: any;
}
