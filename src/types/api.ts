export interface ApiError {
  message: string;
  code: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface ServiceRequest {
  id: string;
  type: string;
  status: "pending" | "in-progress" | "completed" | "rejected";
  description: string;
  submittedAt: string;
  updatedAt: string;
}