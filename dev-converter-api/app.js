const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hii api");
});

app.listen(4003, () => console.log("running on 4003"));
