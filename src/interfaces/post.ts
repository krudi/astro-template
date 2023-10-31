export default interface Post {
  id: number;
  attributes: {
    title: string;
    teaser: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
