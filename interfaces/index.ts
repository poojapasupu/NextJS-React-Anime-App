export type ApiData = {
  data: { Page: Page };
  error: string;
};

export type Page = {
  pageInfo: PageInfo;
  media: Media[];
};

export type PageInfo = {
  perPage: number;
  currentPage: number;
};

export type Media = {
  id: number;
  title: Title;
  description: string;
  coverImage: CoverImage;
};

export type Title = {
  userPreferred: string;
};

export type CoverImage = {
  extraLarge: string;
  large: string;
  medium: string;
};
