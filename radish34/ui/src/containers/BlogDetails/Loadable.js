/**
 *
 * Asynchronously loads the component for BlogDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
