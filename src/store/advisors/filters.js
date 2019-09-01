export default {
  language(advisors, langKey) {
    return advisors.filter(advisor => advisor.languages.includes(langKey));
  },
};
