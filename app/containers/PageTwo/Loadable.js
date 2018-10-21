/**
 *
 * Asynchronously loads the component for PageTwo
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
