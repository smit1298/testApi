module.exports = function (app, db) {
app.post('/notes', (req, res) => {
    const note = {text}
    db.collection('notes').insert(note, (err, result) => {

    })
})
};
