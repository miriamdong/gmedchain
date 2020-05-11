/**
 *
 * Asynchronously loads the component for CommentItem
 *
 */

import loadable from '../../utils/loadable';

export default loadable(() => import('./index'));
