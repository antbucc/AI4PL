'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    console.log("eccolo");

});
app.post('/', (req, res) => {

    console.log("here");
    // wsynth.exe -model_type dn -out_type dot -algo agaf_then_acyclic_preferences -agaf states -mono -dynamic -reachability_analysis file.smv > .\output.dot

    var execFile = require('child_process').execFile;


    execFile('wine wsynth.exe', ['-model_type', 'dn', '-out_type', 'dot', '-algo', 'agaf_then_acyclic_preferences', '-agaf', 'states', '-mono', '-dynamic', '-reachability_analysis', './test.smv'], function (err, data) {
        if (err) {
            console.log("ERRORE: " + err);
        }
        else
            console.log("OK: " + data.toString());
    });



    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);