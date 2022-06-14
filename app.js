//Media Contructor
function MediaReview(title, creator, mediaType, score){
    this.title = title;
    this.creator = creator;
    this.mediaType = mediaType;
    this.score = score;
}
//UI COntructor
function UI() {

}

UI.prototype.addBookToList = function(mediaReview){
    const list = document.getElementById('media-list');

    //create tr element
    const row = document.createElement('tr');
    //Inserts cols
    row.innerHTML = `
        <td>${mediaReview.title}</td>
        <td>${mediaReview.creator}</td>
        <td>${mediaReview.mediaType}</td>
        <td>${mediaReview.score}</td>
        <td><a href='#' class='delete'>X</a></td>
    `;

    console.log(row);
    list.appendChild(row);
}

//Event Listeners
document.getElementById('media-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('titleInput').value,
          creator = document.getElementById('creatorInput').value,
          mediaType = document.getElementById('mediaTypeInput').value,
          score = document.getElementById('scoreInput').value


    const mediaReview = new MediaReview(title, creator, mediaType, score);

    //Instantiate UI
    const ui = new UI();
    //Add book to list
    ui.addBookToList(mediaReview);
    
    e.preventDefault();

});