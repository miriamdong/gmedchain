/**
 *
 * Asynchronously loads the component for ProductDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
