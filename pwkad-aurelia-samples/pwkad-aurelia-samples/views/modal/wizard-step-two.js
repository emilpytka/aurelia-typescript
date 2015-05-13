if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'aurelia-framework', './wizard'], function (require, exports, aurelia_framework_1, wizard_1) {
    var WizardStepTwo = (function () {
        function WizardStepTwo(wizard) {
            this.wizard = wizard;
        }
        WizardStepTwo = __decorate([
            aurelia_framework_1.inject(wizard_1.Wizard)
        ], WizardStepTwo);
        return WizardStepTwo;
    })();
    exports.WizardStepTwo = WizardStepTwo;
});
//# sourceMappingURL=wizard-step-two.js.map