/*
   File: script.js
   GUI Assignment: HW4
   Description: Multiplication Table Website with JQuery
   Vittoria Santoro, UMass Lowell Computer Science, vittoria_santoro@student.uml.edu
   Copyright (c) 2025 by Santoro. All rights reserved. May be freely copied or
   excerpted for educational purposes with credit to the author.
 */

$(document).ready(function () {
    $("#tile-holder > div").draggable({
        revert: "invalid",
        containment: "window",
        scroll: false
    });
    $("#board").droppable();

});
