# Less-is-Greener-backend
Name | Role
-----|------
`An Bui` |  Repo Owner
`Matthew Subin` |   Backend Lead
`Jieun Pivarnik` |   Frontend Lead
`Cynthia Alanis` |   Product Manager

## Introduction
LessIsGreener is a app to provide a user environmental, sustainability, and eco-friendly solutions to keep our Earth greener. 

## Repo link [backend](https://github.com/Jibelais/react-portfolio-backend), [frontend](https://github.com/Jibelais/react-portfolio-frontend)


## Wireframe 

![](https://github.com/anbee123/Less-is-Greener-frontend/blob/main/public/img/wireframe.png?raw=true)

## Screen Shot
![Screen Shot 2023-01-19 at 12 13 05 AM](https://user-images.githubusercontent.com/104610358/213624521-09dcc120-fe4c-4005-a11f-321703cb92c1.png)

![Screenshot 2023-01-19 at 9 36 54 PM](https://user-images.githubusercontent.com/104610358/213624948-b8dc53ca-b3a2-436f-9cd9-1f381b68e32a.png)



## Dependencies

```bash
 "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.8.2",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
```

## Models

Schema for Topics  | 
------------- | 
topic: String  | 
icon: String |
image: String |
titleOne: String |
urlOne: String |
titleTwo: String |
urlTwo: String |
titleThree: String |
urlThree: String |


## Backend Route Table 


URL | HTTP Verb | Action | Notes
| :---: | :---: | :---: | :---: |
/lessisgreener | GET | index | This route shows a list of all the environmently friendly products. |
/lessisgreener/add | POST | new | a CREATE route. |
/lessisgreener/:id | PUT | update | an UPDATE route |
/lessisgreener/:id | DELETE | destroy | This routes deletes entries from Database. |



## Trello Workspace

[Trello Board](https://trello.com/b/18RNqCfj/less-is-greener)