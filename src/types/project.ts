export interface ProjectStateTypes {
  isDarkMode?: boolean;
  isLoading?: boolean;
  isTransitioning?: boolean;
  isShowDDMenu?: boolean;
}

export interface ProjectLink {
  id: string;
  label: string;
  link: string;
  external?: boolean;
}
