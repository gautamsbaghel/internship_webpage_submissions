class Images_feature {

    constructor(img_url, title, new_price, old_price, rating) {
        this.img_url = img_url;
        this.title = title;
        this.new_price = new_price;
        this.old_price = old_price;
        this.rating = rating;
    }

}





index = 0;

function change_feature_section(cmd) {

    images = [
        [
            new Images_feature('./images/part5img1.jpg', 'Dress For Women', '$45', '$55', 3),
            new Images_feature('./images/part5img3.jpg', 'leather grey tuxedo', '$55', '$100', 5),
            new Images_feature('./images/part5img2.jpg', 'Women Full Sleeve Dress', '$70', '$120', 5),
            new Images_feature('./images/part5img4.jpg', 'Light Blue Shirt', '$50', '$80', 4)
        ],
        [
            new Images_feature('./images/part5img4.jpg', 'Light Blue Shirt', '$50', '$80', 4),
            new Images_feature('./images/part5img1.jpg', 'Dress For Women', '$45', '$55', 3),
            new Images_feature('./images/part5img3.jpg', 'leather grey tuxedo', '$55', '$100', 5),
            new Images_feature('./images/part5img2.jpg', 'Women Full Sleeve Dress', '$70', '$120', 5)
        ],
    ];
    image_tag_id = ['image_17', 'image_27', 'image_37', 'image_47'];

    rating_id = [
        ['r117', 'r127', 'r137', 'r147', 'r157'],
        ['r217', 'r227', 'r237', 'r247', 'r257'],
        ['r317', 'r327', 'r337', 'r347', 'r357'],
        ['r417', 'r427', 'r437', 'r447', 'r457'],
    ];

    title_id = ['title_17', 'title_27', 'title_37', 'title_47'];

    new_price_id = ['new_price_17', 'new_price_27', 'new_price_37', 'new_price_47'];

    old_price_id = ['old_price_17', 'old_price_27', 'old_price_37', 'old_price_47'];



    if (cmd == 1) {
        index++;
        if (index > 1) {
            index = 0;
        }

    } else if (cmd == 0) {
        index--;
        if (index < 0) {
            index = 1;
        }
    }

    for (a = 0; a < 4; a++) {
        for (b = 0; b < 5; b++) {
            document.getElementById(rating_id[a][b]).style.color = 'black';
        }
    }

    for (i = 0; i < 4; i++) {
        document.getElementById(image_tag_id[i]).src = images[index][i].img_url;
        document.getElementById(title_id[i]).innerHTML = images[index][i].title;
        document.getElementById(new_price_id[i]).innerHTML = images[index][i].new_price;
        document.getElementById(old_price_id[i]).innerHTML = images[index][i].old_price;
        for (j = 0; j < images[index][i].rating; j++) {
            document.getElementById(rating_id[i][j]).style.color = 'yellow';
        }
    }


}