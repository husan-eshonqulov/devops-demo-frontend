const usersDiv = document.querySelector(".users");

fetch("/api")
  .then((res) => res.json())
  .then((data) => {
    const users = data.users;
    users.forEach((user) => {
      const card = document.createElement("div");
      const id = document.createElement("p");
      const username = document.createElement("p");
      const email = document.createElement("p");

      card.classList.add("card");
      id.classList.add("user-id");
      username.classList.add("user-username");
      email.classList.add("user-email");

      id.textContent = user.id;
      username.textContent = user.username;
      email.textContent = user.email;

      card.appendChild(id);
      card.appendChild(username);
      card.appendChild(email);

      usersDiv.appendChild(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });
