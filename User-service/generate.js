/**
 * Created by goran.pavlovski on 11/10/2016.
 */

var faker = require('faker');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateUsers(){

    var users = [];

    for (var i = 1; i <= 10; i++){

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
		var email = faker.internet.email();
        var avatar = faker.image.avatar();
        var address = faker.address.streetAddress();
        var city = faker.address.city();
        var state = faker.address.state();
		var jobTitle = faker.name.jobTitle();
		var bio = faker.lorem.paragraphs();
		var age = getRandomInt(20, 50);
        var skills = [];
        var random = Math.floor((Math.random() * 5) + 1);

        for (var j = 1; j <= random; j++){

            var title = faker.lorem.word();
            var rating = Math.floor((Math.random() * 10) + 1);

            skills.push(
                {
					"id": j,
                    "title": title,
                    "rating": rating
                }
            )

            console.log(skills);
        }


        users.push({
            "id": i,
            "firstName": firstName,
            "lastName": lastName,
			"email": email,
			"age": age,
			"jobTitle": jobTitle,
			"bio": bio,
            "avatar": avatar,
            "address": address,
            "city": city,
            "state": state,
            "skills": skills
        })

    }
    return {"users": users}
    console.log(users);
}

module.exports = generateUsers;
