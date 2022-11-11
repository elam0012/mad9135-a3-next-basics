import {team} from "../../../datasource/data"

export default function handler(req, res) {
  if(req.method === "get") {
    res.status(200).json(team)
  } 
  res.status(200).json(team)
}