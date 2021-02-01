class Profile {
    constructor(img_url, name, profession) {
        this.img_url = img_url;
        this.name = name;
        this.profession = profession;
    }
}

index = 0;

function change_profile(cmd) {

    profiles = [
        new Profile('./images/part8proimg1.jpeg', 'John Becker', 'Designer'),
        new Profile('./images/part8proimg2.jpg', 'north grey', 'Andriod developer'),
    ];

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



    document.getElementById('imagepro_1').src = profiles[index].img_url;
    document.getElementById('name').innerHTML = profiles[index].name;
    document.getElementById('profession').innerHTML = profiles[index].profession;


}