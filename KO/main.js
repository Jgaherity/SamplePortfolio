﻿"use strict";
(function () {
    var _debug_flag = true;
    var _demo_name = "Contoso on Azure - Metrics Explorer Prototype 1";
    try {
        console.info("BEGIN:\t", _demo_name);
        window.document.addEventListener("DOMContentLoaded", function (ev) {
            var _main_vm = new Prototype_ViewModel(_demo_name, _debug_flag);
            ko.tasks.runEarly();
            ko.applyBindings(_main_vm);
            return;
        });
    }
    catch (ex) {
        console.error("Exception", _demo_name);
        console.error(ex.number, ":", ex.name, ":", ex.message);
        console.error("stack::", ex.stack);
        return;
    }
    finally {
        console.info("END:\t", _demo_name);
    }
    return;
})();