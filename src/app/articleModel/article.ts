export interface Article {
  title: string;
  content: string;
  coverImageUrl: string;
  description: string;
  subtitle: string;
  url: string;
}

export const articleSchema = `{
  title,
  content,
  coverImageUrl,
  description,
  subtitle,
  url
}`;
