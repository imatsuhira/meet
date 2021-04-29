import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../App';
import CitySearch from '../CitySearch';

import { mockData } from '../mock-data';
import { extractLocations } from '../api';

// loadFeature() = load a Gherkin file
// defineFeature() = define the code for that file(feature). Right away,
//the loadFeature() function is used to load your recently created Gherkin file:
// loadFeature() expects the file path to start from the root of the project

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
  test("When user hasn't searched  for a city, show upcoming events from all cities.", ({
    given,
    when,
    then,
  }) => {
    given("user hasn't searched for any city", () => {});
    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the list of upcoming events.', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city.', ({
    given,
    when,
    then,
  }) => {
    let CitySearchWrapper;
    given('the main page is open', () => {
      const locations = extractLocations(mockData);
      CitySearchWrapper = shallow(
        <CitySearch updateEvents={() => {}} locations={locations} />
      );
    });

    when('user starts typing in the city textbox.', () => {
      CitySearchWrapper.find('.city').simulate('change', {
        target: { value: 'Berlin' },
      });
    });

    then(
      'the user should see a list of cities(suggestions) that match what they have typed.',
      () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      }
    );
  });

  test('User can select a city from the suggested list.', ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given('user was typing "Berlin" in the city textbox', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find('.city').simulate('change', {
        target: { value: 'Berlin' },
      });
    });

    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when(/^the user selects a city\(e.g., "(.*)"\) from the list$/, (arg0) => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then(
      'their city should be changed to that city(i.e., "Berlin, Germany")',
      () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      }
    );

    and(
      'the user should receive a list of upcoming events in that city',
      () => {
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      }
    );
  });
});