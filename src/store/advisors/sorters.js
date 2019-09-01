export default {
  languages: {
    ASC(advisors) {
      return advisors.sort((a, b) => a.languages.length - b.languages.length);
    },
    DESC(advisors) {
      return advisors.sort((a, b) => b.languages.length - a.languages.length);
    },
  },
  reviewsCount: {
    ASC(advisors) {
      return advisors.sort((a, b) => a.reviewsCount - b.reviewsCount);
    },
    DESC(advisors) {
      return advisors.sort((a, b) => b.reviewsCount - a.reviewsCount);
    },
  },
  'ratings.average': {
    ASC(advisors) {
      return advisors.sort((a, b) => a.ratings.average - b.ratings.average);
    },
    DESC(advisors) {
      return advisors.sort((a, b) => b.ratings.average - a.ratings.average);
    },
  },
};
