/**
 *
 * Asynchronously loads the component for SingleBlog
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
