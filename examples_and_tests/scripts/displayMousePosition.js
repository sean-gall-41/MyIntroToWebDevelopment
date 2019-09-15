var isMouseTracking = false;

/* We need a function to update the position
 * on our front end, we have 2 labels: 
 * one for X and one for Y
 */
function updateMousePosition() {
    // If tracking is enabled, update the labels
    if (isMouseTracking) {
        /* Get mouse positions with
         * event.clientX and event.clientY.
         * We can update the text of an HTML 
         * element with the innerText property. 
         */
        var positionX = document.getElementById("mousePositionX");
        positionX.innerText = event.clientX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}

// Need a function to toggle whethertracking is enabled
function toggleTracking() {
    // If isMouseTracking is true set to false
    // otherwise it is false, so set to true
    isMouseTracking = !isMouseTracking;
    // Update tracking status to show whether it is enabled
    if (isMouseTracking) {
        document.getElementById("trackingStatus").innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus").innerText = "NOT TRACKING";
    }
}