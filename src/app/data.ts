import Realm from "realm";

export type listingsAndReview = {
  _id?: string;
  access?: string;
  accommodates?: number;
  address?: listingsAndReview_address;
  amenities: Realm.List<string>;
  availability?: listingsAndReview_availability;
  bathrooms?: Realm.BSON.Decimal128;
  bed_type?: string;
  bedrooms?: number;
  beds?: number;
  calendar_last_scraped?: Date;
  cancellation_policy?: string;
  cleaning_fee?: Realm.BSON.Decimal128;
  description?: string;
  extra_people?: Realm.BSON.Decimal128;
  first_review?: Date;
  guests_included?: Realm.BSON.Decimal128;
  host?: listingsAndReview_host;
  house_rules?: string;
  images?: listingsAndReview_images;
  interaction?: string;
  last_review?: Date;
  last_scraped?: Date;
  listing_url?: string;
  maximum_nights?: string;
  minimum_nights?: string;
  monthly_price?: Realm.BSON.Decimal128;
  name?: string;
  neighborhood_overview?: string;
  notes?: string;
  number_of_reviews?: number;
  price?: Realm.BSON.Decimal128;
  property_type?: string;
  review_scores?: listingsAndReview_review_scores;
  reviews: Realm.List<listingsAndReview_reviews>;
  room_type?: string;
  security_deposit?: Realm.BSON.Decimal128;
  space?: string;
  summary?: string;
  transit?: string;
  weekly_price?: Realm.BSON.Decimal128;
};

export const listingsAndReviewSchema = {
  name: 'listingsAndReview',
  properties: {
    _id: 'string?',
    access: 'string?',
    accommodates: 'int?',
    address: 'listingsAndReview_address',
    amenities: 'string[]',
    availability: 'listingsAndReview_availability',
    bathrooms: 'decimal128?',
    bed_type: 'string?',
    bedrooms: 'int?',
    beds: 'int?',
    calendar_last_scraped: 'date?',
    cancellation_policy: 'string?',
    cleaning_fee: 'decimal128?',
    description: 'string?',
    extra_people: 'decimal128?',
    first_review: 'date?',
    guests_included: 'decimal128?',
    host: 'listingsAndReview_host',
    house_rules: 'string?',
    images: 'listingsAndReview_images',
    interaction: 'string?',
    last_review: 'date?',
    last_scraped: 'date?',
    listing_url: 'string?',
    maximum_nights: 'string?',
    minimum_nights: 'string?',
    monthly_price: 'decimal128?',
    name: 'string?',
    neighborhood_overview: 'string?',
    notes: 'string?',
    number_of_reviews: 'int?',
    price: 'decimal128?',
    property_type: 'string?',
    review_scores: 'listingsAndReview_review_scores',
    reviews: 'listingsAndReview_reviews[]',
    room_type: 'string?',
    security_deposit: 'decimal128?',
    space: 'string?',
    summary: 'string?',
    transit: 'string?',
    weekly_price: 'decimal128?',
  },
  primaryKey: '_id',
};

export type listingsAndReview_address = {
  country?: string;
  country_code?: string;
  government_area?: string;
  location?: listingsAndReview_address_location;
  market?: string;
  street?: string;
  suburb?: string;
};

export const listingsAndReview_addressSchema = {
  name: 'listingsAndReview_address',
  embedded: true,
  properties: {
    country: 'string?',
    country_code: 'string?',
    government_area: 'string?',
    location: 'listingsAndReview_address_location',
    market: 'string?',
    street: 'string?',
    suburb: 'string?',
  },
};

export type listingsAndReview_address_location = {
  coordinates: Realm.List<number>;
  is_location_exact?: boolean;
  type?: string;
};

export const listingsAndReview_address_locationSchema = {
  name: 'listingsAndReview_address_location',
  embedded: true,
  properties: {
    coordinates: 'double[]',
    is_location_exact: 'bool?',
    type: 'string?',
  },
};

export type listingsAndReview_availability = {
  availability_30?: number;
  availability_365?: number;
  availability_60?: number;
  availability_90?: number;
};

export const listingsAndReview_availabilitySchema = {
  name: 'listingsAndReview_availability',
  embedded: true,
  properties: {
    availability_30: 'int?',
    availability_365: 'int?',
    availability_60: 'int?',
    availability_90: 'int?',
  },
};

export type listingsAndReview_host = {
  host_about?: string;
  host_has_profile_pic?: boolean;
  host_id?: string;
  host_identity_verified?: boolean;
  host_is_superhost?: boolean;
  host_listings_count?: number;
  host_location?: string;
  host_name?: string;
  host_neighbourhood?: string;
  host_picture_url?: string;
  host_response_rate?: number;
  host_response_time?: string;
  host_thumbnail_url?: string;
  host_total_listings_count?: number;
  host_url?: string;
  host_verifications: Realm.List<string>;
};

export const listingsAndReview_hostSchema = {
  name: 'listingsAndReview_host',
  embedded: true,
  properties: {
    host_about: 'string?',
    host_has_profile_pic: 'bool?',
    host_id: 'string?',
    host_identity_verified: 'bool?',
    host_is_superhost: 'bool?',
    host_listings_count: 'int?',
    host_location: 'string?',
    host_name: 'string?',
    host_neighbourhood: 'string?',
    host_picture_url: 'string?',
    host_response_rate: 'int?',
    host_response_time: 'string?',
    host_thumbnail_url: 'string?',
    host_total_listings_count: 'int?',
    host_url: 'string?',
    host_verifications: 'string[]',
  },
};

export type listingsAndReview_images = {
  medium_url?: string;
  picture_url?: string;
  thumbnail_url?: string;
  xl_picture_url?: string;
};

export const listingsAndReview_imagesSchema = {
  name: 'listingsAndReview_images',
  embedded: true,
  properties: {
    medium_url: 'string?',
    picture_url: 'string?',
    thumbnail_url: 'string?',
    xl_picture_url: 'string?',
  },
};

export type listingsAndReview_review_scores = {
  review_scores_accuracy?: number;
  review_scores_checkin?: number;
  review_scores_cleanliness?: number;
  review_scores_communication?: number;
  review_scores_location?: number;
  review_scores_rating?: number;
  review_scores_value?: number;
};

export const listingsAndReview_review_scoresSchema = {
  name: 'listingsAndReview_review_scores',
  embedded: true,
  properties: {
    review_scores_accuracy: 'int?',
    review_scores_checkin: 'int?',
    review_scores_cleanliness: 'int?',
    review_scores_communication: 'int?',
    review_scores_location: 'int?',
    review_scores_rating: 'int?',
    review_scores_value: 'int?',
  },
};

export type listingsAndReview_reviews = {
  _id?: string;
  comments?: string;
  date?: Date;
  listing_id?: string;
  reviewer_id?: string;
  reviewer_name?: string;
};

export const listingsAndReview_reviewsSchema = {
  name: 'listingsAndReview_reviews',
  embedded: true,
  properties: {
    _id: 'string?',
    comments: 'string?',
    date: 'date?',
    listing_id: 'string?',
    reviewer_id: 'string?',
    reviewer_name: 'string?',
  },
};

export type comment = {
  _id?: Realm.BSON.ObjectId;
  date?: Date;
  email?: string;
  movie_id?: Realm.BSON.ObjectId;
  name?: string;
  text?: string;
};

export const commentSchema = {
  name: 'comment',
  properties: {
    _id: 'objectId?',
    date: 'date?',
    email: 'string?',
    movie_id: 'objectId?',
    name: 'string?',
    text: 'string?',
  },
  primaryKey: '_id',
};

export type movie = {
  _id?: Realm.BSON.ObjectId;
  awards?: movie_awards;
  cast: Realm.List<string>;
  countries: Realm.List<string>;
  directors: Realm.List<string>;
  fullplot?: string;
  genres: Realm.List<string>;
  imdb?: movie_imdb;
  languages: Realm.List<string>;
  lastupdated?: string;
  metacritic?: number;
  num_mflix_comments?: number;
  plot?: string;
  poster?: string;
  rated?: string;
  released?: Date;
  runtime?: number;
  title?: string;
  tomatoes?: movie_tomatoes;
  type?: string;
  writers: Realm.List<string>;
  year?: number;
};

export const movieSchema = {
  name: 'movie',
  properties: {
    _id: 'objectId?',
    awards: 'movie_awards',
    cast: 'string[]',
    countries: 'string[]',
    directors: 'string[]',
    fullplot: 'string?',
    genres: 'string[]',
    imdb: 'movie_imdb',
    languages: 'string[]',
    lastupdated: 'string?',
    metacritic: 'int?',
    num_mflix_comments: 'int?',
    plot: 'string?',
    poster: 'string?',
    rated: 'string?',
    released: 'date?',
    runtime: 'int?',
    title: 'string?',
    tomatoes: 'movie_tomatoes',
    type: 'string?',
    writers: 'string[]',
    year: 'int?',
  },
  primaryKey: '_id',
};

export type movie_awards = {
  nominations?: number;
  text?: string;
  wins?: number;
};

export const movie_awardsSchema = {
  name: 'movie_awards',
  embedded: true,
  properties: {
    nominations: 'int?',
    text: 'string?',
    wins: 'int?',
  },
};

export type movie_imdb = {
  id?: number;
  rating?: number;
  votes?: number;
};

export const movie_imdbSchema = {
  name: 'movie_imdb',
  embedded: true,
  properties: {
    id: 'int?',
    rating: 'double?',
    votes: 'int?',
  },
};

export type movie_tomatoes = {
  boxOffice?: string;
  consensus?: string;
  critic?: movie_tomatoes_critic;
  dvd?: Date;
  fresh?: number;
  lastUpdated?: Date;
  production?: string;
  rotten?: number;
  viewer?: movie_tomatoes_viewer;
  website?: string;
};

export const movie_tomatoesSchema = {
  name: 'movie_tomatoes',
  embedded: true,
  properties: {
    boxOffice: 'string?',
    consensus: 'string?',
    critic: 'movie_tomatoes_critic',
    dvd: 'date?',
    fresh: 'int?',
    lastUpdated: 'date?',
    production: 'string?',
    rotten: 'int?',
    viewer: 'movie_tomatoes_viewer',
    website: 'string?',
  },
};

export type movie_tomatoes_critic = {
  meter?: number;
  numReviews?: number;
  rating?: number;
};

export const movie_tomatoes_criticSchema = {
  name: 'movie_tomatoes_critic',
  embedded: true,
  properties: {
    meter: 'int?',
    numReviews: 'int?',
    rating: 'double?',
  },
};

export type movie_tomatoes_viewer = {
  meter?: number;
  numReviews?: number;
  rating?: number;
};

export const movie_tomatoes_viewerSchema = {
  name: 'movie_tomatoes_viewer',
  embedded: true,
  properties: {
    meter: 'int?',
    numReviews: 'int?',
    rating: 'double?',
  },
};

export type session = {
  _id?: Realm.BSON.ObjectId;
  jwt?: string;
  user_id?: string;
};

export const sessionSchema = {
  name: 'session',
  properties: {
    _id: 'objectId?',
    jwt: 'string?',
    user_id: 'string?',
  },
  primaryKey: '_id',
};

export type theater = {
  _id?: Realm.BSON.ObjectId;
  location?: theater_location;
  theaterId?: number;
};

export const theaterSchema = {
  name: 'theater',
  properties: {
    _id: 'objectId?',
    location: 'theater_location',
    theaterId: 'int?',
  },
  primaryKey: '_id',
};

export type theater_location = {
  address?: theater_location_address;
  geo?: theater_location_geo;
};

export const theater_locationSchema = {
  name: 'theater_location',
  embedded: true,
  properties: {
    address: 'theater_location_address',
    geo: 'theater_location_geo',
  },
};

export type theater_location_address = {
  city?: string;
  state?: string;
  street1?: string;
  street2?: string;
  zipcode?: string;
};

export const theater_location_addressSchema = {
  name: 'theater_location_address',
  embedded: true,
  properties: {
    city: 'string?',
    state: 'string?',
    street1: 'string?',
    street2: 'string?',
    zipcode: 'string?',
  },
};

export type theater_location_geo = {
  coordinates: Realm.List<number>;
  type?: string;
};

export const theater_location_geoSchema = {
  name: 'theater_location_geo',
  embedded: true,
  properties: {
    coordinates: 'double[]',
    type: 'string?',
  },
};

export type user = {
  _id?: Realm.BSON.ObjectId;
  email?: string;
  name?: string;
  password?: string;
  preferences?: user_preferences;
};

export const userSchema = {
  name: 'user',
  properties: {
    _id: 'objectId?',
    email: 'string?',
    name: 'string?',
    password: 'string?',
    preferences: 'user_preferences',
  },
  primaryKey: '_id',
};

export type user_preferences = {
};

export const user_preferencesSchema = {
  name: 'user_preferences',
  embedded: true,
  properties: {},
};
