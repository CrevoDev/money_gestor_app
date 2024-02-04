export interface IToolBarHeader {
  name: string;
  label: string;
  icon?: string;
  condition?: boolean | (() => boolean)
  clickHandler?: Function
}
