export interface apiTypes {
  courses: CourseType[];
  workshops: CourseType[];
  interships: CourseType[];
  instractors: InstractorType[];
}
export interface categories {
  category: 'Frontend' | 'Backend' | 'UI/UX' | 'Mobile';
}

export interface CourseType {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  discountPrice: number;
  category: 'Frontend' | 'Backend' | 'UI/UX' | 'Mobile';
}

export interface InstractorType {
  id: string;
  name: string;
  image: string;
  description: string;
  exp: number;
  courses: string[];
}
