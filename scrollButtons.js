var ScrollButtons = pc.createScript('scrollButtons');

// Add ButtonList for scrolling
ScrollButtons.attributes.add('scrollEntity', { type: 'entity', title: 'Scroll Entity' });

// Add Left and Right Buttons
ScrollButtons.attributes.add('leftButton', { type: 'entity', title: 'Left Button' });
ScrollButtons.attributes.add('RightButton', { type: 'entity', title: 'Right Button' });

ScrollButtons.attributes.add('scrollAmount', { type: 'number', default: 50, title: 'Scroll Amount' });

// Initialize
ScrollButtons.prototype.initialize = function () {
    var self = this;

  
    if (this.leftButton && this.leftButton.element) {
        this.leftButton.element.on('click', function () {
            self.scroll(+self.scrollAmount);
        });
    }

    if (this.RightButton && this.RightButton.element) {
        this.RightButton.element.on('click', function () {
            self.scroll(-self.scrollAmount);
        });
    }
};

// Scroll Function
ScrollButtons.prototype.scroll = function (amount) {
    var pos = this.scrollEntity.getLocalPosition();
    this.scrollEntity.setLocalPosition(pos.x + amount, pos.y, pos.z);
};