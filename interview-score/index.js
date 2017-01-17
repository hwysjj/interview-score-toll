angular.module('interview', []);
angular.module('interview')
    .controller('InterviewController', InterviewController)
    .component('item', {
        templateUrl: 'item.html',
        controller: ItemController,
        bindings: {
            section: '='
        }
    });
function InterviewController() {
    var ctrl = this;
    ctrl.submit = submit;
    var item1 = {
        selected: '0',
        reason: '',
        title: 'UI(HTML+CSS)',
        totalScore: 5
    };
    var item2 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Input Validation',
        totalScore: 3
    };
    var item3 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Initial Data When Reloading Page',
        totalScore: 4
    };
    var item4 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Save Data',
        totalScore: 5
    };
    var item5 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Clear Data',
        totalScore: 4
    };
    var item6 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Show Total',
        totalScore: 3
    };
    var item7 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Others',
        totalScore: 5
    };
    var item8 = {
        selected: '0',
        reason: '',
        title: 'Functionality: Using MV*',
        totalScore: 4
    };
    ctrl.section = [];
    ctrl.section.push(item1);
    ctrl.section.push(item2);
    ctrl.section.push(item3);
    ctrl.section.push(item4);
    ctrl.section.push(item5);
    ctrl.section.push(item6);
    ctrl.section.push(item7);
    ctrl.section.push(item8);

    function submit() {
        var f = ctrl.interviewForm;
        if (!f.$valid) {
            alert('please check the empty fields');
        }
    }
}
function ItemController() {
    var ctrl = this;
    ctrl.scores = ['0', '1', '2', '3', '4', '5'];
}