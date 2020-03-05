"use strict";
function Prototype_ViewModel(demoName, debugFlag) {
    const _self = this;

    this.selected = ko.observable('about');

    this.onclick_changeSelected = function( value ){
        _self.selected(value);
        return;
    }

};


