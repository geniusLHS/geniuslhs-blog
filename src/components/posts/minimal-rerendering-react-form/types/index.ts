export type Info = {
  name: string;
  email: string;
  nickname: string;
  address: string;
};

export type InfoDepend = {
  name: string;
  copyName: string;
  doubleCopyName: string;
};

export type Action = {
  property: keyof InfoDepend;
  payload: string;
};
