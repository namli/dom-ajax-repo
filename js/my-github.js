// Write code here to communicate with Github

window.onload = main;

/**
 * Main function what called whan Window is Loading.
 *
 */
function main() {
  let reposList = document.getElementById("repos-list");
  reposList.innerHTML = "";
  let listOfRepo = getListofRepo("namli");
  listOfRepo.then(res => {
    res.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      reposList.appendChild(li);
    });
  });
}
/**
 * Get list of user repository Name
 *
 * @param {string} user
 * @return {Array} List on Repo name
 */
function getListofRepo(user = "namli") {
  return fetch("https://api.github.com/users/" + user + "/repos")
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      return data.map(item => {
        return item.name;
      });
    });
}
