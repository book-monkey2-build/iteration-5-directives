"use strict";
var testing_1 = require('angular2/testing');
var isbn_pipe_1 = require('./isbn-pipe');
testing_1.describe('IsbnPipe Pipe', function () {
    testing_1.beforeEachProviders(function () { return [isbn_pipe_1.IsbnPipe]; });
    testing_1.it('should transform the input', testing_1.inject([isbn_pipe_1.IsbnPipe], function (pipe) {
        testing_1.expect(pipe.transform(true)).toBe(null);
    }));
});
//# sourceMappingURL=isbn-pipe.spec.js.map