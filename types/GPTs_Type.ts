export default interface GPTs_Type {
  key: number;
  id: number;
  category: string[];
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  path: string;
  openAi_link: string;
  card_description: string;
  page_description: string;
  modes: {
    [key: string]: string;
  };
  meta_title_page: string;
  meta_description_page: string;
  meta_keywords: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_image: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
  twitter_image_alt: string;
  hashtag: string;
}
