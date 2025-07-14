/*
   File: script.js
   GUI Assignment: HW5
   Description: Scrabble
   Vittoria Santoro, UMass Lowell Computer Science, vittoria_santoro@student.uml.edu
   Copyright (c) 2025 by Santoro. All rights reserved. May be freely copied or
   excerpted for educational purposes with credit to the author.
 */

/* following Associated Array is taken from /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
* all credit is given to Jesse M. Heines for this piece of code. */
let SCRABBLE_TILES = [] ;
SCRABBLE_TILES["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
SCRABBLE_TILES["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg"} ;
SCRABBLE_TILES["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg"} ;
SCRABBLE_TILES["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg"} ;
SCRABBLE_TILES["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg"} ;
SCRABBLE_TILES["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg"} ;
SCRABBLE_TILES["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg"} ;
SCRABBLE_TILES["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg"} ;
SCRABBLE_TILES["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg"} ;
SCRABBLE_TILES["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg"} ;
SCRABBLE_TILES["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg"} ;
SCRABBLE_TILES["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg"} ;
SCRABBLE_TILES["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg"} ;
SCRABBLE_TILES["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg"} ;
SCRABBLE_TILES["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg"} ;
SCRABBLE_TILES["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg"} ;
SCRABBLE_TILES["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg"} ;
SCRABBLE_TILES["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg"} ;
SCRABBLE_TILES["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg"} ;
SCRABBLE_TILES["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg"} ;
SCRABBLE_TILES["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg"} ;
SCRABBLE_TILES["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg"} ;
SCRABBLE_TILES["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg"} ;
SCRABBLE_TILES["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg"} ;
SCRABBLE_TILES["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg"} ;
SCRABBLE_TILES["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg"} ;
SCRABBLE_TILES["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "url": "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"} ;


$(document).ready(function () {
    // following Array is to keep track if the current column is occupied
    const occupied = Array(15).fill(false)

    // randomize the tiles shown
    randomizeTiles()

    // make tiles draggable
    $("#tile-holder > div").addClass('tile').draggable({
        revert: "invalid",
        containment: "window",
        scroll: false
    });
    // make the board droppable
    $("#board").droppable({
        accept: ".tile",
        tolerance: "intersect",
        drop: function (event, ui){
            const $tile   = ui.draggable;
            const $board  = $(this);
            // find position and estimate what column the tile is in.
            const position = ui.offset.left - $board.offset().left;
            let col = Math.round(position/94);

            // find the letter of the tile
            let backgroundURL = $tile.css("background-image")
            let fileName =  backgroundURL.split('/').pop()
            let letter = fileName.match(/(.)\.jpg(?=["')]|$)/)[1];

            // if the current space is not occupied, add the tile to the board and snap it to the left corner
            if(!occupied[col]){
                $tile
                    .appendTo($board)
                    .css({
                        position: 'absolute',
                        left: (col * 94),
                        top: 10
                    })
                    .attr({"data-col": col, "letter": letter});
                occupied[col] = true;
                computeScore()
            }

        }
    })
    // make the tile holder also a droppable
    $("#tile-holder").droppable({
        accept: ".tile",
        tolerance: "intersect",
        drop: function (event, ui){
            const $tile   = ui.draggable;
            $tile.appendTo($(this))
        }
    })

});

function randomizeTiles(){
    /*
    set the background image of each tile to something random
    */
    const tileOne = drawRandomTile()
    const tileTwo = drawRandomTile()
    const tileThree = drawRandomTile()
    const tileFour = drawRandomTile()
    const tileFive = drawRandomTile()
    const tileSix = drawRandomTile()
    const tileSeven = drawRandomTile()
    const tileEight = drawRandomTile()

    $('#tile-1').css({
        backgroundImage: `url(` + tileOne.url + `)`,
    });

    $('#tile-2').css({
        backgroundImage: `url("${tileTwo.url}")`,
    });

    $('#tile-3').css({
        backgroundImage: `url("${tileThree.url}")`,
    });

    $('#tile-4').css({
        backgroundImage: `url("${tileFour.url}")`,
    });

    $('#tile-5').css({
        backgroundImage: `url("${tileFive.url}")`,
    });

    $('#tile-6').css({
        backgroundImage: `url("${tileSix.url}")`,
    });

    $('#tile-7').css({
        backgroundImage: `url("${tileSeven.url}")`,
    });

    $('#tile-8').css({
        backgroundImage: `url("${tileEight.url}")`,
    });
}

function drawRandomTile(){
    /*
    Draw random tile. This logic is done by creating a pool of tiles based on the number of remaining tiles
    from the associated array.
    */
    const pool = [];
    for (const [letter, data] of Object.entries(SCRABBLE_TILES)) {
        for (let i = 0; i < data["number-remaining"]; i++) {
            pool.push(letter);
        }
    }
    //return a random letter based on the pool
    const letter = pool[Math.floor(Math.random() * pool.length)];
    //change the number of remaining for that tile to reflect the change
    SCRABBLE_TILES[letter]["number-remaining"]--;
    return SCRABBLE_TILES[letter];
}

function computeScore() {
    /*
    This function computes the scores
    */
    let total = 0;
    // create an Array that directly mirrors the way the current tiles look on the board
    // the values of the Array will be objects taken from the SCRABBLE_TILES associated array
    const tilesByCol = Array(15).fill(null)
    $('#board .tile').each(function () {
        const col = +$(this).attr('data-col');
        const letter = $(this).attr('letter');
        tilesByCol[col] = SCRABBLE_TILES[letter];
    });
    // Using the tilesByCol Array, find the words that are a minimum of length three
    const words = [];
    let currentWord = []

    for (let c = 0; c < 15; c++) {
        const ch = tilesByCol[c];
        if (ch) {
            // append column attribute (needed to keep track of multipliers)
            ch.column = c
            currentWord.push(ch);
        } else if (currentWord) {
            words.push(currentWord);
            currentWord = [];
        }
    }
    // make sure to push the last word incase it is missed
    if (currentWord) words.push(currentWord);
    // word multiplier is default 1
    let wordMultiplier = 1
    // letter multiplier is default 1
    let letterMultiplier = 1
    let currentWordTotal = 0
    for (const word of words) {
        wordMultiplier = 1
        if(word.length > 2){
            for (let i = 0; i < word.length; i++) {
                // columns 2 and 12 are double points for the whole word
                if( word[i].column === 2 || word[i].column === 12 ){
                    wordMultiplier += 1
                }
                // columns 6 and 8 are double points for the whole word
                if( word[i].column === 6 || word[i].column === 8){
                    letterMultiplier = 2
                }
                currentWordTotal += word[i].value * letterMultiplier;
            }
            total += (currentWordTotal * wordMultiplier);
        }

    }
    // update score board
    $('#score').text(total);
}

