/**
 *
 * Asynchronously loads the component for Bootstrap
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
