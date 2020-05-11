/**
 *
 * Asynchronously loads the component for ProductInfo
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
