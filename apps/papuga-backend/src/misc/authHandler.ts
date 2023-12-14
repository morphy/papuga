import { auth } from "express-openid-connect";
import { createClient } from "redis";
import RedisStore from "connect-redis";

const authHandler = (redisClient: ReturnType<typeof createClient>) => {
  return auth({
    authorizationParams: {
      response_type: "code"
    },
    backchannelLogout: {
      store: new RedisStore({ client: redisClient })
    },
    idpLogout: true,
    authRequired: false,
    errorOnRequiredAuth: true,
    afterCallback: (_req, _res, session) => {
      //console.log(jose.decodeJwt(session.id_token));
      //console.log(jose.decodeJwt(session.access_token));

      return session;
    }
  });
};

export default authHandler;
