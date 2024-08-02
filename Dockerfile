############### Stage 1 ###############
FROM oven/bun:1.1.17-alpine

# Create build directory
WORKDIR /usr/src/build

# Install app dependencies
COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

# Bundle app source
COPY . ./

RUN bun run build

############### Stage 2 ###############

FROM oven/bun:1.1.17-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json bun.lockb ./
RUN bun install --production --ignore-scripts --frozen-lockfile

# copy build file
COPY --from=0 /usr/src/build/dist ./dist

EXPOSE 3000

CMD [ "bun", "run", "start" ]
