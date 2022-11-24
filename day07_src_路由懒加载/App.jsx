import { useRoutes, Link } from 'react-router-dom'
import routes from './routes'
export default function App () {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <Link className='list-group-item' to='/about'>
                About
              </Link>
              <Link className='list-group-item' to='/home'>
                Home
              </Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* useRoutes是一个hook，useRoutes 根据路由表返回 Routes 和 Route.所以以后就不需要自己写 Routes 和 Route 了 */}
                {useRoutes(routes)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
