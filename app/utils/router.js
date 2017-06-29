import React from 'react'
import { Route, IndexRouter } from 'react-router'

import Frame from 'container/frame'
import DefaultPage from 'container/page/default'
import { NotFoundModule } from 'container/page/notFound'
import { user } from 'container/page/set'

const routes = (
  <Route>
    <Route path='/' component={Frame}>
      <IndexRouter component={DefaultPage} />
      <Route path='/set/user' component={user} />
    </Route>
    <Route path='*' component={NotFoundModule} />
  </Route>
)

export default routes
