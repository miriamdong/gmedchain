/**
 *
 * Asynchronously loads the component for Featured
 *
 */

import loadable from '../../../utils/loadable';

export default loadable(() => import('./index'));
