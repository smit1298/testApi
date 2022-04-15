module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
const note = { text: req.body.body, tit}
       db.collection('notes').inser(note, (err, results) => {
})    
    })
}