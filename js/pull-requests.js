const inputHandler = document.querySelector("#searchButton");

const getRepos = () => {
  fetch(`https://api.github.com/repos/codeyourfuture/js-exercises/pulls`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      data.map(pullReq => {
        const ulList = document.querySelector("#pull-requests-list");
        const list = document.createElement("li");
        ulList.appendChild(list);
        const anchorTag = document.createElement("a");
        list.appendChild(anchorTag);
        anchorTag.innerText = pullReq.title;
        anchorTag.setAttribute("href", pullReq.html_url);
      });
    });
};

getRepos();

inputHandler.addEventListener("click", event => {
  const value = document.getElementById("searchByUsername").value;
  const ulList = document.querySelector("#pull-requests-list");
  ulList.innerHTML = "";
  console.log(value);

  fetch(`https://api.github.com/repos/codeyourfuture/js-exercises/pulls`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      let arr = data.filter(item => {
        return item.user.login.includes(value);
      });
      console.log(arr);
      arr.forEach(item => {
        const list = document.createElement("li");
        ulList.appendChild(list);
        const anchorTag = document.createElement("a");
        list.appendChild(anchorTag);
        anchorTag.innerText = item.title;
        anchorTag.setAttribute("href", item.html_url);
      });
    });
});
