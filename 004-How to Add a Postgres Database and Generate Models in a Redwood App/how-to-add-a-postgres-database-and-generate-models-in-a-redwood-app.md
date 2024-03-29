<img src="images/blog-header2.jpg" width="900" alt="Redwood Header">

**Cover Image Credits**: Photo by *[Markus Spiske](https://unsplash.com/@markusspiske)*

## Quick Summary

In our **[previous post](../003-Bootstrapping%20a%20RedwoodJS%20Application/bootstrapping-a-redwoodjs-application.md)**, we learned how to bootstrap a redwood app from scratch. Continuing from there, in this tutorial we are going to learn how to add a Postgres database using Heroku and Generate models for our journaling application using Prisma and Redwood commands.

## Goal

At the end of this tutorial, you will learn how to provision a Heroku Postgres Database, connect the database to our Redwood app, generate GraphQL schemas, and the logic needed to perform CRUD operations for all our models.

## Outline
- [Prequisites](#prerequisites)
- [Creating our Postgres Database on Heroku](#creating-our-postgres-database-on-heroku)
  - [Creating a new application on Heroku](#creating-a-new-application-on-heroku)
  - [Adding a Postgres Database to our Heroku App](#adding-a-postgres-database-to-our-heroku-app)
- [Connecting Postgres Database to our Redwood App](#connecting-postgres-database-to-our-redwood-app)
  - [Getting our DATABASE URL from our Heroku App](#getting-our-database-url-from-our-heroku-app)
  - [Adding our DATABASE URL to the environment variable in our Redwood App](#adding-our-database-url-to-the-environment-variable-in-our-redwood-app)
- [Generating GraphQL Schemas](#generating-graphql-schemas)
  - [Replacing Redwood default DB engine with postgres](#replacing-redwood-default-db-engine-with-postgres)
  - [Adding User, Mention and Note models](#adding-user-mention-and-note-models)
  - [Generating Database Migrations and Models for our Redwood App](#generating-database-migrations-and-models-for-our-redwood-app)
  - [Resolve Prisma Migration Error](#resolve-prisma-migration-error)
- [Viewing our database in Heroku Dashboard](#viewing-our-database-in-heroku-dashboard)
- [Conclusion](#conclusion)
  - [Summary](#summary)
  - [Resources](#resources)
  - [GitHub Repo](#github-repo)

## Prerequisites

This tutorial assumes that you have a basic understanding of [Prisma ORM](https://www.prisma.io/).
## Creating our Postgres Database on Heroku
Heroku is a Platform-as-a-service tool for building and managing your application infrastructure in the cloud. You can host your apps on Heroku and get a live URL to access them.

Heroku also has other tools like `Heroku Postgres` which is a cloud-managed Postgres database service. This is where we'll create our database for this app.

If you don't already have an account on Heroku, head on to [Heroku Website](https://www.heroku.com/) and create one. Then log in to your account and you'll be taken to a dashboard that looks something like this:

![heroku-dashboard.png](images/heroku-dashboard.png)

In Heroku, your created applications will appear within the section with the red box. Next we will create an application on Heroku to host our database.

### Creating a new application on Heroku
Follow the steps below to create a new application on `Heroku`.

- __Step 1__: From your Heroku dashboard, click on __`New`__ button and select __`Create new app`__ from the options
![new-app.png](images/new-app.png)

- __Step 2__: Enter a name for your app, pick your region and click on __`Create app`__
![create-new-app.png](images/create-new-app.png)

- __Step 3__: You will be redirected to the __`Deploy`__ tab for your newly created application.
![create app success](images/create-app-success.png)

### Adding a Postgres Database to our Heroku App
- __Step 4__: Click on the __`Resources`__ tab
![got to resources](images/go-to-resources.png)

- __Step 5__: Find the __`Add-ons`__ field, search for and select __`Heroku Postgres`__
![select postgres](images/select-postgres.png)

- __Step 6__: Click __`Submit Order Form`__ on the modal that appears and a database will be created for you. 🎉
![submit order](images/submit-order.png)
![new db](images/new-db.png)

## Connecting Postgres Database to our Redwood App
To use our database in our Redwood app we have to locate and get the URL to our newly created `Heroku Postgres` database.

### Getting our DATABASE URL from our Heroku App
- __Step 7__: From our application dashboard (__`Overview`__) tab, click on our newly created database and you'll be taken to the datastore screen for this database.
![click db one](images/click-db-one.png)

- __Step 8__: On the datastore screen, click the __`Settings`__ tab
![click settings](images/click-settings.png)

- __Step 9__: Click the __`View Credentials`__ button to expose our database configurations
![datastore db one](images/datastore-db-one.png)

- __Step 10__: Locate the __`URI`__ Label and copy the URL in front of it as our database URL
![db credentials](images/db-credentials.png)

### Adding our DATABASE URL to the environment variable in our Redwood App
At the root of our `thankful` project, you'll find a `.env` file. Copy the URL From `Step 10` above and paste it as the value for the `DATABASE_URL` variable inside our `.env` file.

## Generating GraphQL Schemas
Now, we are going to create and generate our database tables which we will persist to the Postgres database we just created.

Personally, before I start writing my database tables, I use a tool called [DB Diagram](https://dbdiagram.io/) to design and understand my database relationships visually.

As we are building a journaling application, we reckon we will need the following features:

- user account creation
- notes creation where users can be mentioned inside of notes, plus the ability to update, query, and delete notes.

So with this in mind, we came up with the following database model using DB diagram:
![thankful models](images/thankful-model.png)

A straightforward explanation for the above model goes like this:
- users table (user creates account)
- notes table (user creates a note and becomes the author of that note)
- mentions table (user can mention another user when creating a note)

Since a user can be mentioned in multiple notes by different authors, and we can have multiple mentioned users in a single note, then it makes sense to have a mentions table to connect mentioned users to the notes they are mentioned in.

For more on table relationships, refer to the resources section in this post.

### Replacing Redwood default DB engine with Postgres
To locate our schema file, from inside the `api` directory in our root project, open up the `db` directory and you'll find a `schema.prisma` file. The content of our default `schema.prisma` file looks like this:
![prisma schema file](images/prisma-schema-file.png)

- Change the `datasource db provider` from `sqlite` to `postgresql`

If you look closely, you'll see that the `datasource db url` already reads the database URL from our environment file with the `DATABASE_URL` key. Since we already updated this to our `Heroku Postgres` URL, we are good to go.

### Adding User, Mention and Note models
In our `schema.prisma` file above we have a default `UserExample` model, replace the default model code in our file with the code below:

```
// api/db/schema.prisma

model User {
  id        String    @id @default(uuid())
  firstName String
  lastName  String
  email     String    @unique
  username  String    @unique
  image     String
  password  String
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  notes     Note[]
  mentions  Mention[]

  @@map("users")
}

model Note {
  id        String    @id @default(uuid())
  content   String
  author    User      @relation(fields: [authorId], references: [id])
  authorId  String
  mentions  Mention[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@unique([authorId])
  @@map("notes")
}

model Mention {
  id                String   @id @default(uuid())
  mentionedUser     User     @relation(fields: [mentionedUsername], references: [username])
  mentionedUsername String
  note              Note     @relation(fields: [noteId], references: [id])
  noteId            String
  createdAt         DateTime @default(now())

  @@unique([mentionedUsername, noteId])
  @@map("mentions")
}
```

The code above creates `User`, `Note`, and `Mention` models for our database schema. To understand how we created the schema above please refer to the [Prisma Schema Docs](https://www.prisma.io/docs/concepts/components/prisma-schema).

### Generating Database Migrations and Models for our Redwood App
Now we have to migrate our database models so they can be in sync with Prisma and write to our `Heroku Postgres` database.

Run the command below to migrate our database:
```
yarn rw prisma migrate dev
```

> __Note__: You are likely to run into an error like this: ![migrate error](images/migrate-error.png)

If you do, do not fret. I will walk you through resolving it.

> If you encounter the error above, refer to the section directly below on how to fix it, otherwise continue to the next section.

### Resolve Prisma Migration Error
In Prisma, when we run development-focused commands like `prisma migrate dev`, Prisma uses a second temporary database called `shadow database` to monitor and detect problems.

> The shadow database is not required when running production commands like `prisma migrate deploy`.

Another caveat is that since we are using a cloud database like `Heroku Postgres` we will have to create this `shadow database` manually. What better way to do that than to use our existing application created through `Steps 1 through 3` above.

> Please run through the database creation steps from `Step 4 through 10` to create a second database on our existing Heroku application and get the URL for this database ready for use.

Once you have successfully created the shadow database, follow the steps below to add it to our Redwood app:
- Add this line `shadowDatabaseUrl = env("SHADOW_DATABASE_URL")` inside your `schema.prisma` file just below the `url = env("DATABASE_URL")` line
- Go to your `.env` file and add the variable `SHADOW_DATABASE_URL` to it
- Copy the URL for your shadow database from the second `Heroku Postgres` database dashboard and paste it as the value of the `SHADOW_DATABASE_URL` variable.
- Now re-run the command
```
yarn rw prisma migrate dev
```
- Put in the name of your migration and prisma will perform its magic and create migrations for your database.
![migrations success](images/migrations-success.png)

### Viewing our database in Heroku Dashboard
To confirm that our models were successfully migrated and the tables are created successfully in our `Heroku Postgres` database we need to take a look at our database inside our Heroku application.

- From our database datastore, click on `Dataclips` tab
![click dataclips](images/click-dataclips.png)

- Click on __`Create Dataclip`__ button
![create dataclips](images/create-dataclips.png)

- Locate the __`Schema Explorer`__ at the right of the screen. If you see your tables listed there, congratulations, your migration was successful. 🎉
![schema explorer](images/schema-explorer.png)

Congratulations! You have successfully added a Postgres database to your Redwood app and created your tables. 🥳

For a job well done, you deserve a ☕.

## Conclusion
### Summary
In this article we learned:
- how to create a cloud Postgres database on Heroku
- adding our cloud database to our Redwood app
- resolving Prisma migrate error with our cloud database
- performing database migration using the `yarn rw prisma dev` command, and
- viewing our migration status on Heroku.

> __Note__: For a more concise way of managing your SQL database, I recommend using a more compact database management system like [DBeaver](https://dbeaver.io/) or Redwood's recommended [Beekeeper Studio](https://www.beekeeperstudio.io/) and [TablePlus](https://tableplus.com/).

### Resources
- [SQL Table Relationships Explained](https://code.tutsplus.com/articles/sql-for-beginners-part-3-database-relationships--net-8561)
- [Prisma Migrate Docs](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Heroku Website](https://www.heroku.com/)

### GitHub Repo

[Thankful App](https://github.com/evansibok/thankful)

<!-- Next, we will learn [What is the next topic?](#) -->



<!-- CREATING A CLOUD HEROKU DATABASE ON ELEPHANTSQL -->

<!-- - [Creating our Postgres Database on ElephantSQL](#creating-our-postgres-database-on-elephantsql)
- [Adding our DATABASE URL to environment variable in our Redwood App](#adding-our-database-url-to-environment-variable-in-our-redwood-app) -->


<!-- ElephantSQL is a PostgreSQL-as-a-service platform. You can set up a cloud postgres database in about 3 minutes. It's pretty straight forward.

Head over to [ElephantSQL Website](https://www.elephantsql.com/) to create an account and login to start creating our database.

Once logged in, your dashboard should look something like this:

![ElephantSQL Dashboard](images/elephantsql-dashboard.png)

Follow the steps below to create a Postgres Database.

- Click on the **`Create New Instance`** button
  ![create new instance](images/create-new-instance.png)

- Enter a name for your database and click the **`Select Region`** button
  ![name database](images/name-database.png)

- Select your region (I typically leave it at the default AWS selection) and click the **`Review`** button
  ![select region](images/select-region.png)

- Review your selection to ensure you have the right configuration, then click the **`Create Instance`** button to continue
  ![review selection](images/review-selection.png)

- Your database will be created and you'll be redirected back to your dashboard 🎉
  ![dashboard with db](images/dashboard-with-db.png)

- To get our DATABASE URL, click on the database name in the dashboard and you'll be taken to the database console. _Notice the URL shown in our console as we'll copy and paste it in our Redwood app in the next step._
  ![db console](images/db-console.png) -->