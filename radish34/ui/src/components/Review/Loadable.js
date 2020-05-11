/**
 *
 * Asynchronously loads the component for Review
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
