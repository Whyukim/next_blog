export interface IPosts {
  id: number;
  image: string;
  createAt: string;
  title: string;
  description: string;
  category: string[];
  main: boolean;
  prev?: IPosts;
  next?: IPosts;
}
