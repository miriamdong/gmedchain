/**
 *
 * Asynchronously loads the component for Testmonial
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
