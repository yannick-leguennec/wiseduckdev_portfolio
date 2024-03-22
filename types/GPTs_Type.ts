export default interface GPTs_Type {
  key: number;
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  path: string;
  openAi_link: string;
  card_description: string;
  page_description: string;
  mode: {
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
}
