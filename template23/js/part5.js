class Images {

    constructor(img_url, title, new_price, old_price, rating) {
        this.img_url = img_url;
        this.title = title;
        this.new_price = new_price;
        this.old_price = old_price;
        this.rating = rating;
    }

}





index = 0;

function change_image_section(cmd) {

    images = [
        [
            new Images('./images/part5img1.jpg', 'Dress For Women', '$45', '$55', 3),
            new Images('./images/part5img3.jpg', 'leather grey tuxedo', '$55', '$100', 5),
            new Images('./images/part5img2.jpg', 'Women Full Sleeve Dress', '$70', '$120', 5),
            new Images('./images/part5img4.jpg', 'Light Blue Shirt', '$50', '$80', 4)
        ],
        [
            new Images('./images/part5img4.jpg', 'Light Blue Shirt', '$50', '$80', 4),
            new Images('./images/part5img1.jpg', 'Dress For Women', '$45', '$55', 3),
            new Images('./images/part5img3.jpg', 'leather grey tuxedo', '$55', '$100', 5),
            new Images('./images/part5img2.jpg', 'Women Full Sleeve Dress', '$70', '$120', 5)
        ],
    ];

    image_tag_id = ['image_1', 'image_2', 'image_3', 'image_4'];

    rating_id = [
        ['r11', 'r12', 'r13', 'r14', 'r15'],
        ['r21', 'r22', 'r23', 'r24', 'r25'],
        ['r31', 'r32', 'r33', 'r34', 'r35'],
        ['r41', 'r42', 'r43', 'r44', 'r45'],
    ];

    title_id = ['title_1', 'title_2', 'title_3', 'title_4'];

    new_price_id = ['new_price_1', 'new_price_2', 'new_price_3', 'new_price_4'];

    old_price_id = ['old_price_1', 'old_price_2', 'old_price_3', 'old_price_4'];


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