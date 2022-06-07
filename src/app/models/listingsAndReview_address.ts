import Realm from "realm";

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
