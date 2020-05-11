/**
 *
 * Asynchronously loads the component for Activity
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
