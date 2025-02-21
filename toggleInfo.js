var ToggleInfo = pc.createScript('toggleInfo');

// Add an entity attribute for the text display
ToggleInfo.attributes.add('infoTextEntity', { type: 'entity' });

// Keep track of the currently open info text
ToggleInfo.currentOpenInfo = null;

// Initialize script
ToggleInfo.prototype.initialize = function () {
    var self = this;

    // Ensure the info text is initially hidden
    if (this.infoTextEntity) {
        this.infoTextEntity.enabled = false;
    }

    // Listen for click events
    this.entity.element.on('click', function () {
        self.toggleInfo();
    });
};

// Toggle the visibility of the info text
ToggleInfo.prototype.toggleInfo = function () {
    if (!this.infoTextEntity) {
        console.error("InfoTextEntity not assigned for", this.entity.name);
        return;
    }

    // If another info text is already open, close it
    if (ToggleInfo.currentOpenInfo && ToggleInfo.currentOpenInfo !== this.infoTextEntity) {
        ToggleInfo.currentOpenInfo.enabled = false;
    }

    // Toggle visibility of the assigned info text
    var isVisible = this.infoTextEntity.enabled;
    this.infoTextEntity.enabled = !isVisible;

    // Update the reference to the currently open info text
    ToggleInfo.currentOpenInfo = this.infoTextEntity.enabled ? this.infoTextEntity : null;
};
