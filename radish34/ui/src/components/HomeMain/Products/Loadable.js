/**
 *
 * Asynchronously loads the component for Products
 *
 */

import loadable from '../../../utils/loadable';

export default loadable(() => import('./index'));
