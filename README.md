# Less-is-Greener-backend
Name | Role
-----|------
`An Bui` |  Repo Owner
`Matthew Subin` |   Backend Lead
`Jieun Pivarnik` |   Frontend Lead
`Cynthia Alanis` |   Product Manager



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

```javascript
const LessIsGreenerSchema = new mongoose.Schema({
  title: String,
  url: String
});

const LessIsGreener = mongoose.model("LessIsGreener", LessIsGreenerSchema);
```

## Backend Route Table 
### Index
http://localhost:4000/lessisgreener

### Create
http://localhost:4000/lessisgreener

### Delete
http://localhost:4000/lessisgreener/:id

### Update
http://localhost:4000/lessisgreener/:id

## Trello Workspace

[Trello]()