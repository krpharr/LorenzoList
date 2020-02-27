$(document).ready(function() {
    $(".catergoryBtn").on("click", (event) => {
        let categoryID = event.target.id;
        console.log(categoryID);
        // Logic to sort items with the selected category handled here.
    })

    // View single item on item's card click
    $(".itemCard").on("click", (event) => {
        let itemID = event.target.id
        $.get(`/items/${itemID}`, (res) => {
            window.location.href = `/items/${itemID}`;
        });
    });

    // View all items button function from user's page
    $("#viewBtn").on("click", (event) => {
        $.get("/items", function(res) {
            window.location.href = "/items";
        });
    });

    $("#profileBtn").on("click", (email) => {
        let id = email.id
        $.get(`/users/${id}`, (res) => {
          window.location.href = `/users/${email.id}`;
        });
    });
});

