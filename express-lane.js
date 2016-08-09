#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path');

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'express-lane',
    title       : 'Express Lane',
    subtitle    : 'Learn how to create an express webserver',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
});
