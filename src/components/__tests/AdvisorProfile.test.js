import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AdvisorProfile from '../AdvisorProfile';
import { languages } from '../../config';
const languagesMap = languages.reduce(
  (acc, lang) => Object.assign(acc, { [lang.locale]: lang }),
  {},
);
const advisor = {
  name: 'Amanda',
  username: 'Amanda_Nikolaus',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/croakx/128.jpg',
  email: 'Amanda_Nikolaus.Auer@gmail.com',
  dob: '1990-07-03T12:31:01.593Z',
  phone: '964.135.2474',
  address: {
    street: 'Wilkinson Cliff',
    suite: 'Suite 808',
    city: 'Queenside',
    zipcode: '46771',
    geo: {
      lat: '61.8244',
      lng: '8.5202',
    },
  },
  website: 'hettie.biz',
  company: {
    name: 'Bruen - Feil',
    catchPhrase: 'Customizable didactic alliance',
    bs: 'front-end cultivate networks',
  },
  reviewsCount: 34,
  uuid: '5d708301-fbba-4d3a-a82b-120f859dcbd2',
  ratings: {
    average: 9.15,
    ratings: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 12,
      '9': 5,
      '10': 17,
    },
  },
  languages: ['it'],
};
const props = {
  languages: languagesMap,
  advisor,
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    render(<AdvisorProfile {...props} />, container);
  });

  expect(container.querySelector('h1').textContent).toContain(advisor.name);
  expect(container.querySelector('img').src).toBe(advisor.avatar);
});
