Make sure you have all the below installed

. | version
--- |-----------
Node.JS | `v16 or above`
Yarn | `v1.22.19 or above`
Typescript | `v4.9.4 or above`

As the main database, the project is using SQLite via better-sqlite package.

To install yarn use:
```sh
npm i -g yarn
```

You will need additional packages:
```sh
npm i -g typescript ts-node nodemon
```

## 🚀 Usage

Create .env file using .env.example and fill all the fields


Just run the following command at the root of your project to install all local packages.

```sh
yarn
```

Just run the following command at the root of your project and the backend will start in watching mode on the port specified in the .env file otherwise 3000:
```sh
yarn dev
```

To build use:

```sh
yarn build
```

## List of additional commands

Check or fix your code format using this commands

```sh
yarn format:check
```
```sh
yarn format:write
```

Check or fix your code view using this commands

```sh
yarn lint:check
```
```sh
yarn lint:write
```

## Postman

Import postman collection from
</br>
```
__ROOT__/Medium Lite.postman_collection.json
```