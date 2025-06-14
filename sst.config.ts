/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "shortin-v2",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const apiUrl = new sst.Secret("ApiUrl");

    const web = new sst.aws.Nextjs("MyWeb", {
      environment: {
        NEXT_PUBLIC_API_URL: apiUrl.value,
      },
    });

    return {
      url: web.url,
    };
  },
});
