module.exports = function (app, db) {
app.post('/notes', (req, res) => {
    const note = {text: req.body.body, title}
    db.collection('notes').insert(note, (err, result) => {

    })
})
};
