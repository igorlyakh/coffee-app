export interface FilteredCoffee {
  id: number;
  name: string;
  subTitle: string;
  type: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

export interface FilterRequest {
  text?: string;
  type?: string;
}
