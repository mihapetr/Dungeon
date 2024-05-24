$(document).ready(function() {

    drawMap(10, 10, null);
});

function drawMap(width, height, characters) {

    let $tiles = $('<table></table>');

    for (let i = 0; i < height; i++) {

        let $row = $('<tr></tr>');

            for (let j = 0; j < width; j++) {
                
                let $tile = $('<td></td>');

                $tile.on('click', function() {
                    alert(`Clicked cell: (${i}, ${j})`);
                });

                $row.append($tile);
            }

            $tiles.append($row);
    }

    $('#map').append($tiles);
}