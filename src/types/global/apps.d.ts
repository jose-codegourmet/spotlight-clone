interface TMockApp {
  id: number;
  applicationName: string;
  version: string;
  size: string;
  lastModified: string;
  image: string;
  developer: string;
}

interface TMockAppList {
  applist: TMockApp[];
  total: number;
}
