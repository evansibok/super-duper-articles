## Quick Summary

In our __[previous post]()__, we learnt how to bootstrap a redwood app from scratch, continuing from there, in this tutorial we are going to learn how to add a Postgres database using Heroku and Generate models for our journaling application using Prisma and Redwood generators.

## Goal

At the end of this tutorial, you will learn how to provision a Heroku Postgres Database, connect the database to our Redwood app, generate GraphQL schemas and the logic needed to perform CRUD operations for all our models.

## Outline
- [Prequisites](#prerequisites)
- [Creating our Postgres Database on Heroku](#creating-our-postgres-database-on-heroku)
  - [Creating a nodeJS app on Heroku](#creating-a-nodejs-app-on-heroku)
  - [Adding a Postgres Heroku Database to our Heroku App](#adding-a-postgres-heroku-database-to-our-heroku-app)
- [Adding Postgres Database to our Redwood App](#adding-postgres-database-to-our-redwood-app)
  - [Getting our DATABASE URL from our Heroku App](#getting-our-database-url-from-our-heroku-app)
  - [Adding our DATABASE URL to our environment variable file in Redwood](#adding-our-database-url-to-our-environment-variable-file-in-redwood)
- [Generating GraphQL Schemas](#generating-graphql-schemas)
  - [Replacing Redwood default DB engine with postgres](#replacing-redwood-default-db-engine-with-postgres)
  - [Adding User, Mention and Note models](#adding-user-mention-and-note-models)
  - [Generating Database Migrations and Models for our Redwood App](#generating-database-migrations-and-models-for-our-redwood-app)
- [Viewing our database in Heroku Dashboard](#viewing-our-database-in-heroku-dashboard)
  - 
- [Conclusion](#conclusion)
  - [Summary](#summary)
  - [Resources](#resources)
  - [GitHub Repo](#github-repo)

## Prerequisites
This tutorial only assumes that you have a basic understanding of [Prisma ORM](https://www.prisma.io/), every other thing will be taught from scratch.

## Creating our Postgres Database on Heroku
### Creating a nodeJS app on Heroku
### Adding a Postgres Heroku Database to our Heroku App

## Adding Postgres Database to our Redwood App
### Getting our DATABASE URL from our Heroku App
### Adding our DATABASE URL to our environment variable file in Redwood

## Generating GraphQL Schemas
### Replacing Redwood default DB engine with postgres
### Adding User, Mention and Note models
### Generating Database Migrations and Models for our Redwood App

## Viewing our database in Heroku Dashboard
## Conclusion

### Summary
### Resources
### GitHub Repo
[Thankful App](https://github.com/evansibok/thankful)

Next, we will learn [What is the next topic?](#)
