module.exports = function (app, db) {
app.post('/notes', (req, res) => {
    const note = {text: req.body.body, title: req.body.titl}
    db.collection('notes').insert(note, (err, result) => {

    })
})
};
