class MediaReview {
    constructor(title, creator, mediaType, score, comments){
        this.title = title;
        this.creator = creator;
        this.mediaType = mediaType;
        this.score = score;
        this.comments = comments;
    }
}

class UI{
    //Add A Review to the Output table list thing
    addReviewToList(mediaReview){
        const list = document.getElementById('media-list');

        //create tr element
        const row = document.createElement('tr');
        let stars;

        //Convert Number Score to Stars to Make it look pretty
        switch(mediaReview.score){
            case "1":
                stars = '<i class="fa-solid fa-star"></i>';
                break;
            case "2":
                stars = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>';
                break;
            case "3":
                stars = '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
                break;
            case "4":
                stars = '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
                break;
            case "5":
                stars = '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
                break;
        }

        const commentElement = `<i class='fa-solid fa-comment fa-2xl'></i>`
        //Inserts cols
        row.innerHTML = `
            <td>${mediaReview.title}</td>
            <td>${mediaReview.creator}</td>
            <td>${mediaReview.mediaType}</td>
            <td>${commentElement}</td>
            <td>${stars}</td>
            <td><a class='fa-solid fa-inverse fa-delete-left fa-lg'></a></td>
        `;
        list.appendChild(row);
    }
//Custom Alert Messages display on the top of the forms
    showAlert(message, className){
        //Create div
        const div = document.createElement('div');
        //Add Classes
        div.className = `alert ${className}`;
        //add Text 
        div.appendChild(document.createTextNode(message));

        //Insert into DOM
        //Get Pareent
        const form =document.querySelector('#media-form');
        const title = document.querySelector('.title-input');

        form.insertBefore(div, title);

        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

//Delete A Review by clicking the a tagged red arrow
    deleteReview(target){
        if(target.className === 'fa-solid fa-inverse fa-delete-left fa-lg'){
            target.parentElement.parentElement.remove();
            console.log('bingo');
        }
    }

//Clear Fields in the form when submmitting a new review
    clearFields(){
        document.getElementById('titleInput').value = '';
        document.getElementById('creatorInput').value = '';
        document.getElementById('mediaTypeInput').value = '';
        document.getElementById('commentInput').value = '';
        document.getElementById('scoreInput').value = '';
    }
}


document.getElementById('media-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('titleInput').value,
          creator = document.getElementById('creatorInput').value,
          mediaType = document.getElementById('mediaTypeInput').value,
          score = document.getElementById('scoreInput').value,
          comments = document.getElementById('commentInput').value

    const mediaReview = new MediaReview(title, creator, mediaType, score, comments);

    //Instantiate UI
    const ui = new UI();
    //Validate inputs 
    if(title === '' || creator === '' || mediaType === '' || score === '' || comments === ''){
        ui.showAlert('Please Fill in All Fields', 'error');

    } else{
        ui.showAlert('Submitted Review', 'success')
        //Add book to list
        ui.addReviewToList(mediaReview);
        //Clear fields
        ui.clearFields();
    }

    e.preventDefault();

});

// Event Lister for delete
document.getElementById('media-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteReview(e.target);


    //Show Alert
    ui.showAlert('Media Review Removed', 'success');

    e.preventDefault();
})