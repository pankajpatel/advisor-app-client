export const api = {
  base: '//localhost:3001',
  limit: 20,
};

export const languages = [
  { name: 'English (UK)', locale: 'en-GB' },
  { name: 'English (US)', locale: 'en-US' },
  { name: 'German', locale: 'de' },
  { name: 'French', locale: 'fr' },
  { name: 'Italian', locale: 'it' },
  { name: 'Spanish', locale: 'es' },
  { name: 'Portuguese', locale: 'pt' },
];
export const sorters = {
  'languages,ASC': {
    key: 'languages,ASC',
    by: 'languages',
    order: 'ASC',
    label: 'Languages in Ascending order',
  },
  'languages,DESC': {
    key: 'languages,DESC',
    by: 'languages',
    order: 'DESC',
    label: 'Languages in Descending order',
  },
  'reviewsCount,ASC': {
    key: 'reviewsCount,ASC',
    by: 'reviewsCount',
    order: 'ASC',
    label: 'Review Count in Ascending order',
  },
  'reviewsCount,DESC': {
    key: 'reviewsCount,DESC',
    by: 'reviewsCount',
    order: 'DESC',
    label: 'Review Count in Descending order',
  },
  'ratings.average,ASC': {
    key: 'ratings.average,ASC',
    by: 'ratings.average',
    order: 'ASC',
    label: 'Avg. Ratings in Ascending order',
  },
  'ratings.average,DESC': {
    key: 'ratings.average,DESC',
    by: 'ratings.average',
    order: 'DESC',
    label: 'Avg. Ratings in Descending order',
  },
};

export default {
  name: 'Space Consultancy', // Random Dummy Name
  api,
  languages,
  sorters,
};
