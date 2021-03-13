# pg-generator-example

Example plugin for pg-generator, that creates model files for several ORMs and other purposes.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Details](#details)
  - [Available Examples](#available-examples)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

`npm install pg-generator-example`

# Synopsis

```ts
$ pgen example --out-dir models --clear --relation-name-functions optimal"
```

```ts
$ pgen example:sequelize6 --out-dir models --clear --relation-name-functions optimal"
```

```ts
$ pgen example:objection2 --out-dir models --clear --relation-name-functions optimal"
```

```ts
$ pgen example:schwifty5 --out-dir models --clear --relation-name-functions optimal"
```

```ts
$ pgen example:md --out-dir db-docs --clear --relation-name-functions optimal"
```

# Details

This is a [pg-generator](https://www.pg-generator.com) plugin to provide example generators and templates for tutorial purposes. Use it via pg-generator.

## Available Examples

As indicated following generators are just examples to help you to build yours. Besides personal opinions, every ORM requires careful practices. As a result, we can't maintain ORM codes we are not using. Therefore, see them as a good effort. Even they are not guaranteed to work with current versions of the respective ORM library.

| Name         | Description                                                                         |
| ------------ | ----------------------------------------------------------------------------------- |
| `app`        | Example of composability.                                                           |
| `md`         | Example of how to create database documentation in markdown.                        |
| `objection2` | Example of model files for [objection](https://vincit.github.io/objection.js/) ORM. |
| `report`     | Example of a simple report of the database.                                         |
| `schwifty`   | Example of model files for [schwifty](https://github.com/hapipal/schwifty) ORM.     |
| `sequelize6` | Example of model files for [sequelize](https://sequelize.org) ORM.                  |
| `tutorial`   | Example of how to create your generators.                                           |
