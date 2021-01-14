import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

import UserQuery from '@/querys/userQuery'

// FIXME:
let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
  issuer: 'accounts.examplesoft.com',
  audience: 'yoursite.net',
}

passport.use(
  new Strategy(opts, (jwtPayload, done) => {
    const user = UserQuery.find(null, jwtPayload.sub)
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
)
