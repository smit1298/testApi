module.exports = function (app, db) {
app.post('/notes', (req, res) => {
    db.collection('notes').insert(note, (r))
})
};
