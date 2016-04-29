System.register(['angular2/testing', './isbn-pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, isbn_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (isbn_pipe_1_1) {
                isbn_pipe_1 = isbn_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('IsbnPipe Pipe', function () {
                testing_1.beforeEachProviders(function () { return [isbn_pipe_1.IsbnPipe]; });
                testing_1.it('should transform the input', testing_1.inject([isbn_pipe_1.IsbnPipe], function (pipe) {
                    testing_1.expect(pipe.transform(true)).toBe(null);
                }));
            });
        }
    }
});
//# sourceMappingURL=isbn-pipe.spec.js.map