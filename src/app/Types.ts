export interface apiTypes {
  courses: CourseType[];
  instractors: InstractorType[];
}

export interface CourseType {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  discountPrice: number;
  bookLink: string;
}

export interface InstractorType {
  id: string;
  name: string;
  image: string;
  description: string;
  exp: number;
  courses: string[];
}
