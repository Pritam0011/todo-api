<h1 align="center"> Todo Api </h1>
 <div align="center"> 
 <img src="https://img.shields.io/github/package-json/v/Pritam0011/todo-api?color=g&label=todo-api">
 <img src="https://img.shields.io/npm/v/npm">
 <img src="https://img.shields.io/github/languages/code-size/Pritam0011/todo-api?logo=github">
 <img src="https://img.shields.io/github/directory-file-count/Pritam0011/todo-api">
</div>

#
This is an API for the Todo app. This is created using Express JS, NodeJS & MongoDB.
## Run the application locally


- Make sure you have NodeJS installed. Check it by typing this command in your terminal -

```
node --version
```

- Fork this repository.
- Clone this repository by running the following command in your terminal -

```
git clone https://github.com/Pritam0011/todo-api.git
```

- cd into the folder by using the following command -

```
cd todo-api
```

- Install the dependencies by running the following command -

```
npm install
```

- **Setting Up development Enviornment create a `.env` file in root folver and add the following line**

```
MONGODB_CONNECTION_URL = *your mongodb connection string*
```

- To run the application, type the following command in your terminal -

```
npm run dev
```

- Access the results produced by accessing the following URL in your browser -

```
http://localhost:3000
```
## Base URL

```
https://pwtodo.onrender.com/
```
## Endpoints
Method | EndPoint                  | Description                                                       |
-------| -----------------------   | ------------------------------------------------------------- |
POST   | /api/todo                 | Create a new todo & return todo-id in response                                          |
GET    | /api/todos                | Get all todos, List of todos                           |
GET    | /api/todo/{todoId}        | Get todo by todoId                                  |
POST   | /api/todo/{todoId}/done   | Mark todo status as done                             |
DELETE | /api/todo/{todoId}/delete | Delete todo by id                                 |

****Note** - Default status for
todo is “pending”.
## Some Usage Instructions & Known Issues 
**Todo General Schema -**
```
{
id: number
description: string
status: string
}
```
- ID will be generated automatically & default status value is "pending"
****Please make sure the description should be required field in frontend**

****Please use only JSON data for the POST Method**

## Demo Usage / Examples 

**POST** - ```https://pwtodo.onrender.com/api/todo```
- Data - 
```
{
	"description":"demo"
}
```
- Response -
```
{
	"id": 1669835877268
}
```
##
**GET** - ```https://pwtodo.onrender.com/api/todos```
``
- Response -
```
[
	{
		"_id": "6387ac65181a03fb0bfed740",
		"id": 1669835877268,
		"description": "demo",
		"status": "pending",
		"createdAt": "2022-11-30T19:17:57.269Z",
		"updatedAt": "2022-11-30T19:17:57.269Z",
		"__v": 0
	},
	{
		"_id": "6387ae74181a03fb0bfed742",
		"id": 1669836404395,
		"description": "demo B",
		"status": "pending",
		"createdAt": "2022-11-30T19:26:44.396Z",
		"updatedAt": "2022-11-30T19:26:44.396Z",
		"__v": 0
	}
]
```
##
**GET** - ```https://pwtodo.onrender.com/api/todo/1669835877268```
``
- Response -
```
{
	"_id": "6387ac65181a03fb0bfed740",
	"id": 1669835877268,
	"description": "demo",
	"status": "pending",
	"createdAt": "2022-11-30T19:17:57.269Z",
	"updatedAt": "2022-11-30T19:17:57.269Z",
	"__v": 0
}
```
##
**POST** - ```https://pwtodo.onrender.com/api/todo/1669835877268/done```
``
- Response -
```
{
	"status": "done"
}
```
##
**DELETE** - ```https://pwtodo.onrender.com/api/todo/1669835877268/delete```
``
- Response -
```
{
	"delete": "done"
}
```
#
