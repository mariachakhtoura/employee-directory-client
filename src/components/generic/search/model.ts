export interface ISearchBarProps {
  value: string;
  placeholder: string;
  onSearch: (searchValue: string) => void;
}