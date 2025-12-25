
export enum Category {
  RESIDENTIAL = '프리미엄 주거',
  BUILDING = '수익형 빌딩',
  LAND = '토지 및 개발'
}

export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  category: Category;
  description: string;
  imageUrl: string;
}

export interface SuccessStory {
  id: number;
  title: string;
  summary: string;
  details: string;
  result: string;
  imageUrl: string;
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  field: string;
  method: string;
  message: string;
}
