/**
 *
 * Asynchronously loads the component for PageOne
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
