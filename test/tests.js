import '../utils.js';
import { createStatsString } from '../utils.js';

const test = QUnit.test;

test('This will test if my createStatsString function will work.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Wow! You\'ve changed the architecture 5 times! You\'ve changed the climate 4 times, and you changed what your city is known for 3 times. Great work!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createStatsString(5, 4, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

