
export const config = {
    client: {
      id: process.env.GITHUB_CLIENT_ID!,
      secret: process.env.GITHUB_CLIENT_SECRET!
    },
    auth: {
      tokenHost: 'https://github.com/login/'
    }
  };
  
  // https://github.com/oauth/authorize?client_id=6903aa8547a474fb9202&redirect_uri=http%3A%2F%2Fapi.firstcontributions.com%2Fv1%2Fauth%2Fcallback&response_type=code&state=ba108af9-97f1-11ec-8e19-0242ac1e0106
  // 
