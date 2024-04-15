import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];
//all routes in here are starting with /users
router.get('/', (req, res)=>{

   console.log(users);
    res.send(users);
})

router.post('/', (req, res)=>{
    const user = req.body ;
    const userID = uuidv4();
    users.push({user,id: userID});
    res.send(users);
})

router.get('/:id', (req, res)=>{
    const {id} = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);

})
export default router;
