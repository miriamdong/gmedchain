/**
 *
 * Asynchronously loads the component for Blog
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
