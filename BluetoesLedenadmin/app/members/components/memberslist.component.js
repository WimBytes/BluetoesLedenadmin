"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var members_service_1 = require('../services/members.service');
var MembersListComponent = (function () {
    // Deze service haalt de leden op
    function MembersListComponent(membersService) {
        this.membersService = membersService;
    }
    MembersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var promise = this.membersService.getMembers();
        promise.then(function (members) { return _this.members = members; });
        //this.members = this.membersService.getMembers();
        //this.membersService.getMembers().resolve(this.members)
    };
    MembersListComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            //templateUrl: './app/members/views/membersList.html'
            //template: `<h1>Members list</h1>`,
            templateUrl: './app/members/views/membersList.html',
            providers: [members_service_1.MembersService]
        }), 
        __metadata('design:paramtypes', [members_service_1.MembersService])
    ], MembersListComponent);
    return MembersListComponent;
}());
exports.MembersListComponent = MembersListComponent;
//# sourceMappingURL=memberslist.component.js.map