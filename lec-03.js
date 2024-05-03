
  var ps=require("fs")
//   ps.mkdirSync("hello")
  ps.writeFileSync("hello/user.txt","hello kjjfhvfh  dhnjqdqj")
  ps.appendFileSync("hello/user.txt","good eve")
  var data=ps.readFileSync("hello/user.txt","utf-8")
  console.log(data) // .tostring when there is no utf-8