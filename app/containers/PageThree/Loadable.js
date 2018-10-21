/**
 *
 * Asynchronously loads the component for PageThree
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
