/**
 *
 * Asynchronously loads the component for SingleProduct
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
