# @ellumina/flux SDK

The `@ellumina/flux` SDK is designed to simplify interactions with the Flux ecosystem. It supports uploading files and JSON data, as well as retrieving data from Flux.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Modules](#modules)
  - [Dev Module](#dev-module)
  - [Rental Module](#rental-module)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Installation

To get started with the `@ellumina/flux` SDK, install it via npm:

```bash
npm install @ellumina/flux
```

## Usage

To use the SDK, you need to initialize an instance of the `Flux` class with your API key:

```javascript
const Flux = require("@ellumina/flux").default;
const fs = require("fs");

const instance = new Flux('your-api-key-here');
```

Replace `'your-api-key-here'` with your actual API key.

## Modules

The SDK provides two modules: `dev` and `rental`. Each module includes three main functions for interacting with Flux.

### Dev Module

#### 1. `pinFile(stream: Readable): Promise<any>`

Uploads a file to Flux.

**Parameters:**
- `stream`: A readable stream of the file to be uploaded.

**Example:**

```javascript
const stream = fs.createReadStream("path/to/your/file.png");

instance.dev.pinFile(stream)
  .then((data) => {
    console.log("File pinned successfully:", data);
  })
  .catch((err) => {
    console.error("Error pinning file:", err);
  });
```

#### 2. `pinJson(json: object): Promise<any>`

Uploads a JSON object to Flux.

**Parameters:**
- `json`: A JavaScript object to be uploaded.

**Example:**

```javascript
instance.dev.pinJson({ "hello": "world" })
  .then((data) => {
    console.log("JSON pinned successfully:", data);
  })
  .catch((err) => {
    console.error("Error pinning JSON:", err);
  });
```

#### 3. `getJson(hash: string): Promise<any>`

Retrieves a JSON object from Flux using its hash.

**Parameters:**
- `hash`: The hash of the JSON object stored in Flux.

**Example:**

```javascript
instance.dev.getJson("file-hash-here")
  .then((data) => {
    console.log("JSON data retrieved:", data);
  })
  .catch((err) => {
    console.error("Error retrieving JSON:", err);
  });
```

### Rental Module

The `rental` module functions are similar to those in the `dev` module but are used for different endpoints or purposes.

#### 1. `pinFile(stream: Readable): Promise<any>`

**Example:**

```javascript
const stream = fs.createReadStream("path/to/your/file.png");

instance.rental.pinFile(stream)
  .then((data) => {
    console.log("File pinned successfully:", data);
  })
  .catch((err) => {
    console.error("Error pinning file:", err);
  });
```

#### 2. `pinJson(json: object): Promise<any>`

**Example:**

```javascript
instance.rental.pinJson({ "hello": "world" })
  .then((data) => {
    console.log("JSON pinned successfully:", data);
  })
  .catch((err) => {
    console.error("Error pinning JSON:", err);
  });
```

#### 3. `getJson(hash: string): Promise<any>`

**Example:**

```javascript
instance.rental.getJson("file-hash-here")
  .then((data) => {
    console.log("JSON data retrieved:", data);
  })
  .catch((err) => {
    console.error("Error retrieving JSON:", err);
  });
```

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Priyanshu Soni
