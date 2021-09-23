# KEYSTONE NEXT JS

- THE APP runs [here](https://keystone-next-temp.vercel.app/)

- Running yarn dev will do the following:

- Provision a GraphQL schema based on the configuration of keystone.ts
- Build a Prisma.io schema (which Keystone uses to manage the database)
- Create the database and run a migration to set up your schema
- Serve Keystone’s Admin UI at http://localhost:8000
- the graphql is at

```
prod https://yourdomain/api/graphql
dev http://localhost:3000/api/graphql
```

- Serve the Next.js frontend at http://localhost:3000
- Add a postinstall script that ensures everything works if we install other dependencies later on
