function excercise1() {
  let name = "Angelica";
  let age = 25;
  let height = 1.6;
  let city = "Medellin";
  let pets = true;

  console.log(name, "tipo: ", typeof name);
  console.log(age, "tipo: ", typeof age);
  console.log(height, "tipo: ", typeof height);
  console.log(city, "tipo: ", typeof city);
  console.log(pets, "tipo: ", typeof pets);

  name = "Sara";
  console.log(name, "tipo: ", typeof name);
  age = 22;
  console.log(age, "tipo: ", typeof age);
}

function excercise3() {
  let shelterPetQuantity = 143;
  let housePetQuantity = 2;

  console.log(shelterPetQuantity + housePetQuantity);

  let firstName = "Angelica";
  let lastName = "Cuervo";

  console.log(firstName + " " + lastName);
}

function excercise4() {
  let age = prompt("Enter your age ");
  age = parseInt(age);

  if (age >= 18) {
    alert("You can pass");
  } else {
    alert("You're under 18");
  }
}

function excercise5() {
  let numberOfProducts = prompt(
    "Enter the number of products buyed by the client"
  );

  if (numberOfProducts < 3) {
    alert("The client can't access to the discount");
  } else {
    alert("The client obtained the discount");
  }
}

function excercise6() {
  let grade = prompt("Enter the student grade ");

  if (grade < 3) {
    alert("The student doesn't pass");
  } else if (grade >= 3 && grade <= 5) {
    alert("The student pass");
  } else {
    alert("Enter a valid number");
  }
}

function excercise7() {
  let semaphore = prompt("Enter the semaphore color");

  if (
    semaphore.toLowerCase() == "verde" ||
    semaphore.toLowerCase() == "green"
  ) {
    alert("Move");
  } else if (
    semaphore.toLowerCase() == "amarillo" ||
    semaphore.toLowerCase() == "yellow"
  ) {
    alert("Wait");
  } else if (
    semaphore.toLowerCase() == "rojo" ||
    semaphore.toLowerCase() == "red"
  ) {
    alert("Stop");
  } else {
    alert("Invalid value");
  }
}

function excercise8() {
  let age = prompt("Enter your age");

  if (age >= 15 && age <= 35) {
    let nationality = prompt("Enter your nacionality");
    if (
      nationality.toLowerCase() == "colombiano" ||
      nationality.toLowerCase() == "colombian"
    ) {
      alert("You can enter to the tournament");
    } else {
      alert("You can't enter because you're not colombian");
    }
  } else {
    if (age < 15) {
      alert("You can't enter you are under 15 years old");
    } else if (age > 35) {
      alert("You can't enter because you're over 35 years old");
    }
  }
}

function excercise9() {
  let account = parseInt(prompt("Enter the value in your account"));

  if (account < 10000) {
    alert("Insufficient funds");
  } else if (account >= 10000 && account <= 1000000) {
    alert("Moderated funds");
  } else if (account > 1000000) {
    let premium = prompt("Do you have a premium account? y/n");
    if (premium.toLowerCase() == "y") {
      alert("Preferential client");
    }
  }
}

function excercise10() {
  let day = prompt("Enter the day to search the menu").toLowerCase();

  switch (day) {
    case "monday":
      alert("Soup");
      break;
    case "tuesday":
      alert("Beans");
      break;
    case "wednesday":
      alert("Arepa with eggs");
      break;
    case "thursday":
      alert("Hummus");
      break;
    case "friday":
      alert("Falafels");
      break;
    case "saturday":
      alert("Fries");
      break;
    case "sunday":
      alert("Chinese rice");
      break;
    default:
      alert(`${day} is not an option`);
      break;
  }
}

function excercise11() {
  let user = prompt("Enter your user").toLowerCase();
  let pass = prompt("Enter your password");

  if (user == "angelica") {
    if (pass == "angelica") {
      let report = prompt("Do you have active reports? y/n").toLowerCase();
      if (report == "n") {
        let age = prompt(
          "are you over 21 years old or have premium membership? y/n"
        ).toLowerCase();
        if (age == "y") {
          alert("You can access to the offer");
        } else {
          alert("You can't access to the offer");
        }
      } else if (report == "y") {
        alert("You are reported");
      }
    } else {
      alert("Password invalid");
    }
  } else {
    alert("Invalid user");
  }
}

function excercise12() {
  let hour = prompt(
    "Enter the hour of the day: [m] morning, [a] afternoon [n] night"
  ).toLowerCase();
  let weather = prompt(
    "Enter the weather: [s] sunny [r] rainy [c] cloudy"
  ).toLowerCase();
  let umbrella = prompt("Do you have umbrella? [y] yes [n] no").toLowerCase();

  if (hour == "m" && weather == "s" && umbrella == "y") {
    alert("Walk");
  } else if (hour == "a" && weather == "c" && umbrella == "n") {
    alert("Wait");
  } else if (hour == "n" && weather == "r" && umbrella == "n") {
    alert("Take the bus");
  } else {
    alert("Enter a valid option");
  }
}

function excercise13() {
  let correctUser = "angelica"
  let correctPass = "123"
  let user = prompt("Enter your user").toLowerCase();
  let pass = prompt("Enter your password");
  const maxAttempts = 3;
  let attempt = 0;

  if (user == "angelica") {
    if (pass == "angelica") {


    }
  }

}
