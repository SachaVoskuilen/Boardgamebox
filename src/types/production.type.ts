import { ImagesType } from './images.type';

export interface ProductionType {
  id?: string;
  images?: ImagesType;
  score?: number;
  url?: string;
  name?: string;
}
