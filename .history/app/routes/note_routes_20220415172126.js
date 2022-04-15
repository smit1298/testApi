module.exports = function (app, db) {
app.post('/notes', (req, res) => {
    const note = 
    db.collection('notes').insert(note, (err, result) => {

    })
})
};
