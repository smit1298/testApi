module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // we'll create the node here
       db.collection('notes')
.inser(note, )    
    })
}