module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // we'll create the node here
        console.log(req.b);
        res.send('Hello')
    
    })
}