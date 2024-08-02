# nodejs-service-template

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

or

```bash
bun run build && bun start
```

This project was created using `bun init` in bun v1.1.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## How to use this template?

1. Create a new repo using this as the repository template
2. Change `name` in `package.json` to your service name
3. Change `SERVICE_NAME` in `.env.development` and `.env.test`
4. Update README.md

## What is this template using?

1. Bun - javascript runtime, package manager, testing framework
2. Hono - web framework for building APIs
3. Winston - structured logging
4. Dotenv - managing environment variables
5. Biome - linting & code formatting
6. Docker - building an image for the service
7. senv - encrypting & decrypting env variables

## Folder structure

`src` - application code
`src/api` - api endpoint handlers
`src/lib` - main code logic, models, etc

`tests` - test files. For unit tests, it ideally follows similar folder structure as `src`

`dist` - application build directory

## Environment variables

Env variables are defined in `.env.development` and `.env.test`, for development and testing environments respectively.

When first starting out with a repo:

1. Create a `.env.pass` file with a password to be used for encryption (foo is default for this template): `echo "foo" >> .env.pass`
2. Run `bun run env:decrypt` to create .env files
3. Create a more secure password and save it in `.env.pass`
4. Save this password in 1password so it's shared with the team
5. Run `bun run env:encrypt` to encrypt the variables with the new password
6. Commit the encrypted env files
