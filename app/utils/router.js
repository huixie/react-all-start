import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Frame from 'container/frame'
import DefaultPage from 'container/page/default'
import { NotFoundModule } from 'container/page/notFound'
import { user } from 'container/page/set'

const routers = (
  <Route>
    <Route path='/' component={Frame}>
      <IndexRoute component={DefaultPage} />
      <Route path='/set/user' component={user} />
    </Route>
    <Route path='*' component={NotFoundModule} />
  </Route>
)

export default routers
