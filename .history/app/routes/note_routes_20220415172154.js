module.exports = function (app, db) {
app.post('/notes', (req, res) => {
    const note = {text: req.body.body, }
    db.collection('notes').insert(note, (err, result) => {

    })
})
};
