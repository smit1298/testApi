module.exports = function (app, db) {
    app.get('/notes/:id', (req, res => {
        const details = {'_id': ID GOES HERE};
        db.collection('notes')
    }))
  app.post("/notes", (req, res) => {
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': "An error has occured" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
