import { CategoryType, ImagesType, MarkerType, MechanicType, ProductionType, QuestionType, RatingType } from '.';

export interface BoardGameType {
  id: string;
  handle?: string;
  url?: string;
  name?: string;
  year_published?: number;
  min_players?: number;
  max_players?: number;
  min_playtime?: number;
  max_playtime?: number;
  min_age?: number;
  description?: string;
  thumb_url?: string;
  image_url?: string;
  mechanics?: Array<MechanicType>;
  categories?: Array<CategoryType>;
  publishers?: Array<ProductionType>;
  designers?: Array<ProductionType>;
  developers?: Array<ProductionType>;
  primary_publisher?: ProductionType;
  primary_designer?: ProductionType;
  artists?: Array<string>;
  names?: Array<string>;
  rules_url?: string;
  amazon_rank?: number;
  cs_rating?: number;
  official_url?: string;
  num_user_ratings?: number;
  average_user_rating?: number;
  num_user_complexity_votes?: number;
  average_learning_complexity?: number;
  average_strategy_complexity?: number;
  visits?: number;
  lists?: number;
  mentions?: number;
  links?: number;
  plays?: number;
  rank?: number;
  type?: string;
  images?: ImagesType;
  description_preview?: string;

  // recPlayers?: number;
  // markers?: Array<MarkerType>;
  // ratings?: Array<RatingType>;
  // questions?: Array<QuestionType>;
}
