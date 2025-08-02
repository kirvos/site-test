
export interface ImageAsset {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  mainImage: ImageAsset;
  description: any[]; // Portable Text
  gallery?: ImageAsset[];
  category?: string;
  client?: string;
  completionDate?: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  description: any[]; // Portable Text
  mainImage?: ImageAsset;
}

export interface CompanyInfo {
  _id: string;
  companyName: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  logo?: ImageAsset;
  description?: any[]; // Portable Text
}
