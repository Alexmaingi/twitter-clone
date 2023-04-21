async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((res) => res.json())
    .then((data) => {
      const resultData = `
              <div class="content">
        <div class="header">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <div class="names">
            <h2>${data.name}</h2>
            <p>32.3K Tweets</p>
          </div>
        </div>
        <div class="icons">
          <img src="./assets/MicrosoftTeams-image.png" alt="" />
        </div>
        <div class="profile-section1">
          <div class="image-section">
            <div class="profile-pic">
              <img
                src="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
                alt="profile-pic"
              />
            </div>
            <h1>${data.name}</h1>
            <p>@V${data.username}</p>
          </div>
          <div class="contact-section">
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon>
            <button>Following</button>
          </div>
        </div>
        <div class="bio">
          <p>
            Lead Dev Real <span>@${data.company.name}</span> Created
            <span>@${data.website}</span> | ${data.company.catchPhrase} | ${data.company.bs}
          </p>
        </div>
        <div class="education-section">
          <div class="education">
            <p>
              <ion-icon name="briefcase-outline"></ion-icon>Science &
              Technology<ion-icon name="alert-circle-outline"></ion-icon>
            </p>
            <p><ion-icon name="location-outline"></ion-icon> Etherium</p>
            <p><ion-icon name="link-outline"></ion-icon><span>Vitto.c</span></p>
          </div>
          <p class="join">
            <ion-icon name="calendar-outline"></ion-icon>Joined August 2022
          </p>
          <div class="follow">
            <h2>322 <span>Following</span></h2>
            <h2>110.8K<span>Followers</span></h2>
          </div>
          <div class="followers">
            <div class="follower-pics">
              <div class="image1">
                <img
                  src="https://images.pexels.com/photos/6624376/pexels-photo-6624376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                />
              </div>
              <div class="image2">
                <img
                  src="https://images.pexels.com/photos/3809793/pexels-photo-3809793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                />
              </div>
              <div class="image3">
                <img
                  src="https://images.pexels.com/photos/1724175/pexels-photo-1724175.jpeg"
                  alt="image"
                />
              </div>
            </div>
            <p>
              Followed by Langford kwabena, Rohit and and 29 others you follow
            </p>
          </div>
          <div class="link">
            <div class="links">
              <h2 class="tweet">Tweets</h2>
              <h2>Replies</h2>
              <h2>Media</h2>
              <h2>Likes</h2>
            </div>
            <hr />
          </div>
          <div class="pinned">
          <p><ion-icon name="pricetags-outline"></ion-icon> Pinned Tweet</p>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
  
          
        </div>
      </div>`;
      document.querySelector(".container").innerHTML = resultData;
    });
}
fetchData();

async function fetchPost() {
  await fetch("https://jsonplaceholder.typicode.com/users/5/posts")
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      data.map((data) => {
        let postData = ` <div key=${data.id} class="tweets">
      <div class="tweet-content">
        <div class="tweet-pic">
          <img
            src="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
            alt="profile-pic"
          />
        </div>
        <div class="text-tweet">
          <h2>Vitto Rivebella <span>@VittoStack. Mar 31</span></h2>
          <p>${data.title}</p>
          <p>${data.body}</p>
        </div>
      </div>
    </div>
`;
        html += postData;
        document.querySelector(".tweetslistcontainer").innerHTML = html;
      });
    });
}
fetchPost();
