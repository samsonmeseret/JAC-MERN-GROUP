<img src="./nodejs.png"/> 
<a href="https://survey.stackoverflow.co/2023/#technolog">Developers Servey 2023</a>

# Contents

- Part One

### 1. Node Js

    - History
    - os
    - fs
    - path
    - http

- Part Two

## History

**The Genesis of NodeJS**

```
The story of NodeJS dates back to 2009 when Ryan Dahl, a young software engineer, encountered limitations in the popular server-side platforms like Apache HTTP Server and Ruby on Rails. Frustrated with the sluggishness and inefficiency of these platforms, Dahl sought to develop a more efficient and scalable solution. Thus, NodeJS was born, built on top of Google's V8 JavaScript engine.
```

Dahl unveiled his creation at the **European JSConf** in November 2009, showcasing the new technology's **non-blocking, event-driven architecture** that made it well-suited for handling concurrent connections with minimal overhead. This innovative approach quickly caught the attention of developers around the world, and NodeJS rapidly gained traction.

```
Ryan Dahl: "I think NodeJS is not the ultimate server framework. It's just the beginning of a new way of writing servers."
```

**Node.js was initially released in 2009, so as of 2023, it is around 14 years old.**

## Where is Nodejs now?

1. **Netflix**: Netflix uses Node.js for various components of its streaming service. The company has open-sourced some of its Node.js modules and tools.

2. **LinkedIn**: LinkedIn leverages Node.js for both server-side and client-side applications. The LinkedIn mobile app, for example, uses Node.js on the server side.

3. **Walmart**: Walmart has used Node.js to build performant and scalable applications. They have open-sourced some of their tools, such as the Walmart Node.js Helper Library.

4. **Uber**: Uber has incorporated Node.js into its technology stack. Node.js is used in some parts of the Uber platform for real-time features.

5. **PayPal**: PayPal has utilized Node.js for building applications, especially those that require real-time functionality and scalability.

6. **Microsoft**: Microsoft, the owner of GitHub, has embraced Node.js for various projects and services. Microsoft's Visual Studio Code, a popular code editor, is built with Electron, which is based on Node.js.

7. **Yahoo**: Yahoo has adopted Node.js for certain aspects of its technology infrastructure, particularly for developing real-time applications.

8. **NASA**: NASA has used Node.js for building web applications and tools, taking advantage of its scalability and real-time capabilities.

9. **Ebay**: eBay has integrated Node.js into its tech stack, using it for certain applications and services.

10. **Medium**: Medium, the online publishing platform, has utilized Node.js for its back-end services.
    1
11. **Whatapp and Slack Desktop**

## Nodejs

```

Node.js is a runtime environment for executing JavaScript code on the server side. It consists of several key components that contribute to its functionality and effectiveness in building scalable and high-performance applications. Here are the main components of Node.js:

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
```

<a href="https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking">More On Event Driven Arcitecture</a>

**1. V8 JavaScript Engine:**

Node.js is built on the V8 JavaScript engine, developed by Google for use in the Chrome browser. V8 is known for its fast execution of JavaScript code, and it forms the core of Node.js.

**2. Libuv:**

Libuv is a multi-platform support library that provides the asynchronous I/O operations in Node.js. It includes an event loop, a thread pool for offloading certain tasks, and other essential components for managing non-blocking operations.

**3. Core Modules:**

Node.js includes a set of core modules that provide essential functionalities. These modules include **fs** for file system operations, **http** for building web servers, **net** for handling network operations, and more. Developers can use these modules to perform various tasks without needing external libraries.

Installation and chacking Node
<a href="https://nodejs.org/en">Nodejs.org </a>

## Playing With node

simple codes to run on nodes

## Node Globals

1. variables : var, let & const
2. Directory & File: **dirname, **filename
3. Module: module
4. process object: process
5. Timer functions: setTimeout, setInterval
6. more

## Node Modules

```
In the context of Node.js, a "module" refers to a reusable piece of code that encapsulates related functionality. Node.js applications are typically organized using a modular structure, where different parts of the application are separated into modules. Each module can contain variables, functions, or classes that provide a specific set of features or services.
```

**1. File-Based Modules:**

In Node.js, each file is treated as a separate module. The code within a file is encapsulated within the module, and the variables and functions defined in that file are local to that module by default.

**2. Module Exports:**

To make variables or functions from a module accessible to other parts of the application, you need to use the module.exports or exports object. This allows you to define what should be exposed from the module.

**3. Module Loading:**

Modules can be loaded into other modules using the require function. This function returns the exports of the requested module.

### Types of Node Modules

1. Local Modules (Custom):local modules are the
   modules you create locally in your Node.js application
2. Core modules (Built in Modules): These are built-in modules and come automatically when we
   install Node.js. Some of the popular third-party modules are http, fs, path, and os
3. Third-party/contributed modules: modules that are available online using the
   Node Package Manager (NPM). These modules can be installed in the project
   folder or globally. Some of the popular third-party modules are express, react

### Using a modular structure in Node.js applications offers several benefits, and it is considered a best practice for various reasons:

- Modularity and Code Organization:
- Readability and Collaboration:
- Security:
- Encapsulation and Abstraction:
- Dependency Management:

```
Implementing modularity in commondJs and ES6 style in nodejs

```

## Core Modules | Built in Modules

The most used core Node modules: These are built-in modules and come automatically
when we install Node.js. Here are the most common code Node modules:

**1. fs:** It is used to handle file and directory/folder system. Examples: creating a
folder, Accessing and open a file, editing a file, copying a file, Removing a file or
a directory

**2. os:** It provides information about your computer’s operating system. Examples:
Getting the name of the host computer and getting the right network information
of the computer

```
const os = require("os");
const freeRAMinByte = os.freemem();

console.log(freeRAMinByte);// prints free memory in byte

console.log(os.totalmem()); // total mem

console.log(os.hostname()); // hostname of the system

console.log(os.platform()); // os platform

console.log(os.uptime());

console.log(os.userInfo());
```

**3. path:** It includes methods to deal with file paths. Examples: Identify the path of a
specific file or folder, identify the path to the root directory and identify the
extension of a file

```
const path = require("path"); // importing path module
const parsedFileName = path.parse(__filename);
console.log(parsedFileName.name); // will print name of your file, i.e.,
myFirst.js

const path = require('path');
console.log(path.extname('index.html'));

const path = require('path');
console.log(path.dirname('/index.html'));

const path = require('path');
console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));

```

**4. http:** It creates an HTTP server in Node.js. Examples: Ability to receive and
handle HTTP request and managing connections

```
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found\n');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

```

**5. Events:** It is used to own and trigger events. Examples: Creating, firing and
listening for your own events

```
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

myEmitter.on('sum', (a, b) => {
  console.log(`Sum: ${a + b}`);
});

myEmitter.emit('sum', 2, 3);

```
