export interface BaseContentItem {
  id: string;
  title: string;
  status: "draft" | "published";
  lastModified: string;
}

export interface NewsItem extends BaseContentItem {
  content: string;
  image?: string;
}

export interface EventItem extends BaseContentItem {
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface ProgramItem extends BaseContentItem {
  type: "agenda" | "project";
  description: string;
}

export interface AdminBreadcrumb {
  label: string;
  href?: string;
}