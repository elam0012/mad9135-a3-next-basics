import {team} from "../../../datasource/data"

export default function handler(req, res) {
  if(req.method === "get") {
    console.log(team)
    res.status(200).json(team)
  } 
  // else if (req.method === "POST") {
  //   const listItem = req.body.listItem
  //   const newEmployee = {
  //     id: Date.now(),
  //     name:listItem
  //   }
  //   classlist.push(newEmployee)
  //   res.status(201).json(classlist)
  // }
  // console.log(team)
  res.status(200).json(team)
}