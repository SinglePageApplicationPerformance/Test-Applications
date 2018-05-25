ko.options.deferUpdates = true;
var ViewModel = function() {
    this.allItems = [];
    var self = this;
        var arr = [];
		//The number of rendered items can be changed here
        for (var i = 0; i < 1000; i++) {
            arr.push({
                firstName: 'Jake' + i,
                lastName: 'Smith' + i,
                text: 'Lorem Ipsum has been the ' + i + ' industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                favorites: i + 100,
                reposts: i + 50,
                image: "test" + i,
                age: i,
                id: i
            });
        }
        self.allItems=arr;
    this.changeOne = function() {
        self.allItems()[Math.floor(Math.random() * self.numberOfItems)].favorites(9999);
    }
};

ko.applyBindings(new ViewModel());
