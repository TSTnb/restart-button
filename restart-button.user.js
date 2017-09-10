// ==UserScript==
// @name Tetris Friends Restart Button
// @namespace https://userscripts-mirror.org/scripts/show/186497
// @description Adds a nifty "Restart Game" button underneath the "Options" button on the left side of the page.  Pressing "[" restarts the game, too.  Single-player games only.
// @include http://*tetrisfriends.com/games/Marathon/game.php*
// @include http://*tetrisfriends.com/games/Ultra/game.php*
// @include http://*tetrisfriends.com/games/Sprint/game.php*
// @include http://*tetrisfriends.com/games/Survival/game.php*
// @include http://*tetrisfriends.com/games/Mono/game.php*
// @grant none
// @version 0.0.5
// @author knux
// @run-at document-start
// ==/UserScript==
restartButton = '[';

try {
    restartGame = function()
        {
            var flashElement = document.getElementById('contentFlash');
            flashElement.as3_tetrisGameRestart();
            flashElement.focus();
        };
    var restartElement = document.createElement('a');
    restartElement.setAttribute('href', 'javascript:restartGame()');
    restartElement.innerHTML = 'Restart Game';
    try {
        document.getElementById('game_options').parentNode.appendChild(document.createElement('br'));
        document.getElementById('game_options').parentNode.appendChild(restartElement);
    }catch(err) {
     }
    (addFlashListener = function()
    {
        try {
            document.getElementById('contentFlash').onkeyup = function(e){if(e.key === restartButton) restartGame()};
        }catch(err) {
            setTimeout(addFlashListener, 200);
        }
    })();
}catch(err) {
    alert(err + "\n" + err.stack);
}
