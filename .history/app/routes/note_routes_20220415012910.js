module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
const note = { text: req.body.body, title: req.body.title }
       db.collection('notes').inser(note, (err, results) => {
           if (err) {
               res.send({'error': 'An error has occured'});
           } else {
               res.send(r)
           }
})    
    })
}