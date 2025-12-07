// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  sassOptions: {
    // project root as Sass load path
    includePaths: [path.resolve(__dirname)],
    // no additionalData, no @use in there
  },

  turbopack: {},

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "wiseduckdev.vercel.app",
          },
        ],
        destination: "https://wiseduckdev.com/:path*",
        permanent: true, // Indicates a 301 redirect
      },
      {
        source: "/gpts",
        destination: "https://wiseduckdevgpts.com",
        permanent: true,
      },
      {
        source: "/gpts/prompting-tips",
        destination:
          "https://wiseduckdevgpts.com/custom-gpts-optimization-guide",
        permanent: true,
      },
      {
        source: "/gpts/frontend",
        destination: "https://wiseduckdevgpts.com/collections/frontend",
        permanent: true,
      },
      {
        source: "/gpts/design",
        destination: "https://wiseduckdevgpts.com/collections/design",
        permanent: true,
      },
      {
        source: "/gpts/backend",
        destination: "https://wiseduckdevgpts.com/collections/backend",
        permanent: true,
      },
      {
        source: "/gpts/database",
        destination: "https://wiseduckdevgpts.com/collections/database",
        permanent: true,
      },
      {
        source: "/gpts/framework",
        destination: "https://wiseduckdevgpts.com/collections/framework",
        permanent: true,
      },
      {
        source: "/gpts/cms",
        destination: "https://wiseduckdevgpts.com/collections/cms",
        permanent: true,
      },
      {
        source: "/gpts/productivity",
        destination: "https://wiseduckdevgpts.com/collections/productivity",
        permanent: true,
      },
      {
        source: "/gpts/blockchain",
        destination: "https://wiseduckdevgpts.com/collections/blockchain",
        permanent: true,
      },
      {
        source: "/gpts/automation",
        destination: "https://wiseduckdevgpts.com/collections/automation",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity",
        destination: "https://wiseduckdevgpts.com/collections/cybersecurity",
        permanent: true,
      },
      {
        source: "/gpts/ai",
        destination: "https://wiseduckdevgpts.com/collections/ai",
        permanent: true,
      },
      {
        source: "/gpts/programming",
        destination: "https://wiseduckdevgpts.com/collections/programming",
        permanent: true,
      },
      {
        source: "/gpts/productivity/seo-mastermind",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/seo-insight-navigator",
        permanent: true,
      },
      {
        source: "/gpts/design/cutie-super-style-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/design/css-design-mentor-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/vite-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/vite-developer-guide",
        permanent: true,
      },
      {
        source: "/gpts/frontend/react-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/react-mastery-pro-assistant",
        permanent: true,
      },
      {
        source: "/gpts/productivity/web-mobile-app-project-manager",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/ducky-web-mobile-project-manager",
        permanent: true,
      },
      {
        source: "/gpts/productivity/docker-kubernetes-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/docker-master-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/vitest-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/vitest-testmaster-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/merise-db-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/merise-db-architect-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/web-wise-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/webdev-mastery-copilot",
        permanent: true,
      },
      {
        source: "/gpts/frontend/typescript-titan-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/typescript-mastery-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/next-js-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/nextjs-mastery-coach-ai",
        permanent: true,
      },
      {
        source: "/gpts/productivity/git-github-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/github-proficiency-oracle-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/medusa-mind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/medusa-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/frontend/JavaScript-Jedi-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/javascript-guru-gpt",
        permanent: true,
      },
      {
        source: "/gpts/frontend/react-native-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/react-native-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/elm-enlightener-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/elm-master-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/JQuery-Genius-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/jquery-mastery-companion-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/swift-savant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/swift-programming-guide",
        permanent: true,
      },
      {
        source: "/gpts/frontend/pwa-pathfinder-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/pwa-guide-debug-expert",
        permanent: true,
      },
      {
        source: "/gpts/frontend/jamstack-maestro-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/jamstack-mastermind-gpt",
        permanent: true,
      },
      {
        source: "/gpts/frontend/blazejs-beacon-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/blazejs-mastery-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/typebot-techie-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/typebot-chat-gpt-expert",
        permanent: true,
      },
      {
        source: "/gpts/frontend/websocket-ninja-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/websocket-wizard-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/python-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/python-master-assistant",
        permanent: true,
      },
      {
        source: "/gpts/backend/java-byte-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/java-master-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/ruby-realm-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/ruby-mastery-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/PHP-pioneer-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/php-dev-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/cpp_ranger_ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/cpp-expert-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/csharp-code-crafter",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/c-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/go-genius-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/go-programming-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/rust-optimal-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/rust-programming-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/Elixir-Empower-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/elixir-mentor-ai",
        permanent: true,
      },
      {
        source: "/gpts/backend/kotlin-konscious-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/kotlin-expert-companion-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/Node-Ninja-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/node-insight-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/deno-dynamo-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/deno-guide-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/apache-alchemy-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/apache-server-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/Nginx-Nexus-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/nginx-expert-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/caddy-server-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/caddy-server-assistant",
        permanent: true,
      },
      {
        source: "/gpts/backend/swagger-savant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/swagger-api-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/sequelize-sentinel-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/sequelize-mastery-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/prisma-prodigy-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/prisma-orm-mastery-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/tRPC-Thinker-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/trpc-development-mentor-ai",
        permanent: true,
      },
      {
        source: "/gpts/backend/graphql-guru-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/graphql-expertise-assistant",
        permanent: true,
      },
      {
        source: "/gpts/backend/express-eureka-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/express-js-mentor-ai",
        permanent: true,
      },
      {
        source: "/gpts/database/sql-wizard-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/sql-mastery-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/mysql-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/mysql-expert-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/postgresql-prodigy-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/postgresql-expert-assistant",
        permanent: true,
      },
      {
        source: "/gpts/database/microsoft-sql-server-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/database/sql-server-expert-copilot",
        permanent: true,
      },
      {
        source: "/gpts/database/oracle-omniscient-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/database/oracle-database-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/mongodb-mentor-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/mongodb-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/Cassandra-DB-Copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/database/cassandra-expert-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/redis-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/redis-database-companion-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/neo4j-navigator-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/neo4j-database-navigator-ai",
        permanent: true,
      },
      {
        source: "/gpts/database/amazon-neptune-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/neptune-database-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/influxdb-insight-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/influxdb-expert-navigator-ai",
        permanent: true,
      },
      {
        source: "/gpts/database/prometheus-mind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/prometheus-database-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/timescaledb-titan-ai-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/database/timescaledb-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/pgadmin-prodigy-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/database/pgadmin-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/pgmodeler-mentor-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/pgmodeler-database-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/database/sqitch-sensei-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/sqitch-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/mantine-ui-maestro-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/design/react-mantine-ui-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/tailwind-css-oracle-aid",
        destination:
          "https://wiseduckdevgpts.com/collections/design/tailwind-css-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/tailwind-components-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/design/tailwind-web-design-guide",
        permanent: true,
      },
      {
        source: "/gpts/design/bootstrap-brain-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/design/bootstrap-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/bulma-builder-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/bulma-designer-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/pico-prophet-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/pico-css-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/pure-pioneer-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/pure-css-design-mentor-ai",
        permanent: true,
      },
      {
        source: "/gpts/design/material-design-mastermind-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/design/material-design-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/webflow-whizard-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/webflow-development-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/radix-ui-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/radix-ui-expert-guide",
        permanent: true,
      },
      {
        source: "/gpts/database/sqlite-pilot-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/sqlite-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/data-analytics-whiz-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/data-analytics-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/data-science-savant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/data-science-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/data-engineering-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/database/data-engineering-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/figma-prophet-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/figma-design-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/canva-creator-ai-wise-duck-dev-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/design/canva-design-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/adobe-photoshop-assistant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/photoshop-design-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/design/adobe-dreamweaver-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/design/dreamweaver-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/design/adobe-xd-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/adobe-xd-design-mentor",
        permanent: true,
      },
      {
        source: "/gpts/design/ui-ux-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/design/ui-ux-design-mentor-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/Spring-Boot-Sensei-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/spring-boot-master-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/laravel-legend-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/laravel-development-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/net-prophet-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/net-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/flask-forge-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/flask-development-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/Ionic-Innovator-GPT",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/ionic-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/flutter-pioneer-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/flutter-development-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/remix-rebel-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/remix-framework-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/Qwik-Quest-GPT",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/qwik-framework-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/vue-js-visionary-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/vue-js-master-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/nuxt-ninja-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/nuxt-expert-assistant-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/nest-navigator-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/nestjs-expert-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/svelte-savant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/svelte-expert-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/Bun-Bard-AI-tool",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/bun-framework-master-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/parcel-js-pathfinder-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/parcel-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/angular-alchemist-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/angular-expert-advisor-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/gatsby-guru-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/gatsby-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/django-discover-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/django-web-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/ruby-on-rails-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/ruby-rails-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/ember-js-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/ember-js-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/NativeScript-Navigator-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/nativescript-mobile-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/apache-cordova-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/cordova-development-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/titanium-sdk-trailblazer-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/titanium-sdk-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/symfony-sensei-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/symfony-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/redwood-js-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/redwood-js-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/astro-genius-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/astro-framework-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/fastify-focus-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/fastify-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/meteor-mentor-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/meteor-framework-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/hapi-dev-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/hapi-framework-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/framework/neutralino-ninja-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/neutralino-js-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/frontend/dart-master-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/dart-proficiency-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/productivity/digital-marketing-ai-strategist",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/digital-marketing-strategist-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/google-search-console-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/seo-search-console-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/google-seo-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/google-seo-optimization-assistant",
        permanent: true,
      },
      {
        source: "/gpts/productivity/google-business-sensei-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/google-business-master-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/google-ads-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/google-ads-developer-ai",
        permanent: true,
      },
      {
        source: "/gpts/productivity/Google-Cloud-Pathfinder-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/google-cloud-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/google-analytics-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/google-analytics-oracle-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/bing-webmaster-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/bing-seo-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/Web-Indexer-Genius",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/seo-web-indexing-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/business-model-builder-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/business-strategy-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/productivity/scrum-master-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/agile-scrum-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/schema-scribe-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/schema-master-web-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/postman-prophet-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/postman-api-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/feature-flags-assistant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/feature-flags-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/vsc-wizard-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/visual-studio-code-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/jetbrains-jedi-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/jetbrains-ide-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/aws-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/deployment/aws-expert-navigator-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/microsoft-azure-assistant-ai-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/deployment/azure-development-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/docker-desktop-assistant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/docker-desktop-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/k8s-lens-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/kubernetes-lens-navigation-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/Komodor-Copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/komodor-devops-assistant",
        permanent: true,
      },
      {
        source: "/gpts/productivity/copy-writing-master-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/copy-writing-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/notion-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/notion-productivity-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/software-engineer-expert-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/software-engineer-expert-ai",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/solidity-scribe-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/solidity-developer-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/smart-contract-builder-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/smart-contract-architect-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/nft-collection-assistant-creator",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/nft-creator-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/automation/zapier-wizard-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/automation/zapier-automation-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/automation/zapier-platform-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/automation/zapier-platform-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/Jest-Genius-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/jest-testing-pro-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/react-test-library-tactician-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/react-testing-library-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/google-colaboratory-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/colab-master-oracle-ai",
        permanent: true,
      },
      {
        source: "/gpts/productivity/eslint-expert-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/eslint-expert-ai",
        permanent: true,
      },
      {
        source: "/gpts/frontend/EJS-Mastermind-AI-Wise-Duck-Dev",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/ejs-development-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/OWASP-Expert-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/owasp-security-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/crypto-cybersecurity-defense-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/crypto-security-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/frontend-cybersecurity-goldeneye",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/frontend-security-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/backend-cybersecurity-goldeneye",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/backend-security-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/api-secured-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/api-security-oracle-ai",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/database-flawless-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/database-security-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/automation/make-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/automation/make-automation-master-gpt",
        permanent: true,
      },
      {
        source: "/gpts/automation/make-api-assistant",
        destination:
          "https://wiseduckdevgpts.com/collections/automation/make-rest-api-developer-guide",
        permanent: true,
      },
      {
        source: "/gpts/automation/prompt-engineer-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/automation/prompt-engineering-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/ai/llm-wizard-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/llm-wizard-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/wordpress-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/wordpress-expertise-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/cms/ocean-wordpress-template-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/ocean-wordpress-design-copilot",
        permanent: true,
      },
      {
        source: "/gpts/cms/astra-theme-wordpress-navigator",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/astra-theme-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/wix-wizard-ai-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/wix-design-wizard-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/shopify-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/shopify-developer-oracle-ai",
        permanent: true,
      },
      {
        source: "/gpts/cms/joomla-ninja-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/joomla-master-ai-guide",
        permanent: true,
      },
      {
        source: "/gpts/cms/drupal-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/drupal-mastery-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/cms/magento-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/magento-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/strapi-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/strapi-cms-expert-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/ghost-expert-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/ghost-cms-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/prestashop-prophet-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/prestashop-master-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/directus-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/directus-expert-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cms/sanity-brain-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/sanity-cms-expert-ai",
        permanent: true,
      },
      {
        source: "/gpts/framework/Sylius-Genius",
        destination:
          "https://wiseduckdevgpts.com/collections/framework/sylius-expert-assistant-ai",
        permanent: true,
      },
      {
        source: "/gpts/productivity/markdown-master-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/markdown-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/enterprise-innovator-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/tech-venture-innovator-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/hugging-face-expert-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/hugging-face-ml-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/vigilant-blockchain-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/blockchain-security-copilot",
        permanent: true,
      },
      {
        source: "/gpts/cms/Plugin-WP-Creator",
        destination:
          "https://wiseduckdevgpts.com/collections/cms/wordpress-plugin-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/backend/perl-mentor-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/backend/perl-programming-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/r-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/r-programming-expert-ai",
        permanent: true,
      },
      {
        source: "/gpts/programming/julia-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/julia-expert-guide",
        permanent: true,
      },
      {
        source: "/gpts/programming/MATLABExpertAI",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/matlab-programming-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/fortran-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/fortran-programming-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/bash-best-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/bash-expertise-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/powershell-brain-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/powershell-script-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/programming/scala-savant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/scala-expert-guidance-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/clojure-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/clojure-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/haskell-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/haskell-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/lisp-assistant-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/lisp-mastery-guide-gpt",
        permanent: true,
      },
      {
        source:
          "/gpts/programming/erland-prophet-ai-wise-duck-dev-gpt-logo.webp",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/erlang-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/groovy-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/groovy-expert-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/f-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/f-sharp-programming-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/objective-c-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/objective-c-expert-ai",
        permanent: true,
      },
      {
        source: "/gpts/programming/tcl-muse-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/tcl-expert-advisor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/assembly-avenger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/assembly-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/lua-wizard-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/lua-expertise-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/OCaml-Mastermind-AI",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/ocaml-mastery-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/prolog-ninja-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/prolog-expert-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/smalltalk-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/smalltalk-programming-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/ada-expert-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/ada-programming-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/cobol-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/cobol-programming-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/vba-scribe-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/vba-expert-companion-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/Pathfinder-AI-VHDL-programming",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/vhdl-guide-mentor-gpt",
        permanent: true,
      },
      {
        source: "/gpts/productivity/dao-pro-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/productivity/dao-development-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/database/indexeddb-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/database/indexeddb-expert-assistant",
        permanent: true,
      },
      {
        source: "/gpts/frontend/swiftui-pioneer-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/frontend/swiftui-expert-assistant",
        permanent: true,
      },
      {
        source: "/gpts/cybersecurity/secure-user-mastermind",
        destination:
          "https://wiseduckdevgpts.com/collections/cybersecurity/secure-developer-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/programming/cython-cypher-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/programming/cython-extension-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/image-recognition-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/image-recognition-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/deep-learning-ai-muse",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/deep-learning-guidance-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/NLP-AI-Guide",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/nlp-mastery-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/reinforcement-learning-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/reinforcement-learning-mentor",
        permanent: true,
      },
      {
        source: "/gpts/ai/gans-brain-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/creative-gans-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/sonic-speech-transcriber",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/speech-transcription-genius-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/computer-vision-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/computer-vision-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/predictive-analytics-muse",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/predictive-analytics-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/anomaly-detection-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/anomaly-insights-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/sentiment-analysis-wizard-the-wise-duck-dev",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/sentiment-analysis-assistant",
        permanent: true,
      },
      {
        source: "/gpts/ai/robotics-pathfinder-ai-gpt-wise-duck-dev",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/autonomous-robotics-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/tensorflow-prophet-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/tensorflow-tutor-ai",
        permanent: true,
      },
      {
        source: "/gpts/ai/pytorch-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/pytorch-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/ai/nltk-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/nltk-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/spacy-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/spacy-oracle-nlp-assistant",
        permanent: true,
      },
      {
        source: "/gpts/ai/data-preprocessing-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/data-prep-assistant-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/feature-engineering-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/feature-engineering-assistant",
        permanent: true,
      },
      {
        source: "/gpts/ai/data-augmentation-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/data-augmentation-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/tokenization-scribe-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/tokenization-scribe-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/embeddings-brain-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/text-embeddings-ai-companion",
        permanent: true,
      },
      {
        source: "/gpts/ai/environment-data-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/environment-data-trainer-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/dimensionality-reduction-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/dimensionality-reduction-guide",
        permanent: true,
      },
      {
        source: "/gpts/ai/neural-networks-ninja-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/neural-network-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/cnns-robust-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/cnns-expert-ai-assistant",
        permanent: true,
      },
      {
        source: "/gpts/ai/rnns-ranger-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/rnns-guide-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/transformers-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/transformers-ai-developer-gpt",
        permanent: true,
      },
      {
        source: "/gpts/ai/autoencoders-master-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/ai/autoencoder-insights-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/dapps-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/blockchain-dapps-expert-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/crypto-transactions-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/crypto-blockchain-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/blockchain-architect-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/blockchain-development-guide",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/tokenization-genius-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/tokenization-expert-ai",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/defi-oracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/defi-blockchain-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/blockchain-scalability-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/blockchain-scalability-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/ethereum-wizard-ai-gpt-wise-duck-dev-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/ethereum-dapp-developer-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/binance-smart-chain-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/binance-chain-developer-guide",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/polkadot-miracle-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/polkadot-developer-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/cosmos-cosmic-ai-gpt-wise-duck-dev-gpts",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/cosmos-blockchain-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/solana-expert-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/solana-development-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/tezos-top-gpt",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/tezos-developer-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/cardano-mastermind-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/cardano-dapp-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/avalanche-storm-ai",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/avalanche-blockchain-guide-ai",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/algorand-ranger-ai-wise-duck-dev",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/algorand-dev-guide-gpt",
        permanent: true,
      },
      {
        source: "/gpts/blockchain/near-copilot",
        destination:
          "https://wiseduckdevgpts.com/collections/blockchain/near-development-guide-gpt",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
