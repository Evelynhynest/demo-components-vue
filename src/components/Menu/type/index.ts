export interface IMenuItem {
  name: string,
  level: number,
  children?: IMenuItem[],
}

export interface ISubDirectory {
  name: string,
  level: number,
  children: IDirectoryItem[],
}

export interface IDirectoryItem {
  name: string,
  level: number,
  children?: [],
}

