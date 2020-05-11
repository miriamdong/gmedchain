/**
 *
 * Asynchronously loads the component for Pricing
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
