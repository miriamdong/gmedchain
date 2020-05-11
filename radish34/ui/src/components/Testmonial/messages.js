/*
 * Testmonial Messages
 *
 * This contains all the text for the Testmonial component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Testmonial';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Testmonial component!',
  },
});
