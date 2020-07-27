const express = require('express');

const app = express();

/* 追加 ポートの適応 */
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.listen(3000);
