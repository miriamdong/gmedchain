/**
 *
 * Asynchronously loads the component for ItemDetails
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
