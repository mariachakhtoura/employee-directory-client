export interface IUserProfile {
  url: string;
  name: string;
  title: string;
}

export interface IInfoDisplay {
  label: string;
  value: string;
}

export interface IInforDisplayProps {
  info: IInfoDisplay[];
}