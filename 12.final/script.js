function elementForBusiness(business) {
  const businessElement = document.createElement("div");
  businessElement.classList.add("business");

  const businessHeader = document.createElement("header");
  businessHeader.classList.add("business-header");
  businessElement.appendChild(businessHeader);

  const businessTitle = document.createElement("h2");
  businessTitle.classList.add("business-title");
  businessTitle.innerText = business.name;
  businessHeader.appendChild(businessTitle);

  const businessContent = document.createElement("section");
  businessContent.classList.add("business-content");
  businessElement.appendChild(businessContent);

  const businessImageContainer = document.createElement("div");
  businessImageContainer.classList.add("business-image-container");
  businessContent.appendChild(businessImageContainer);

  const businessImage = document.createElement("img");
  businessImage.classList.add("business-image");
  businessImage.setAttribute("src", business.image_url);
  businessImage.setAttribute("alt", business.alias);
  businessImageContainer.appendChild(businessImage);

  const rating = document.createElement("section");
  rating.classList.add("rating");
  businessElement.appendChild(rating);

  const ratingcount = document.createElement("span");
  ratingcount.classList.add("rating_count");
  ratingcount.innerText = `Rating : ${business.rating} ⭐️`;
  rating.appendChild(ratingcount);

  const location = document.createElement("section");
  location.classList.add("location");
  businessElement.appendChild(location);

  const address = document.createElement("p");
  address.classList.add("address");
  address.innerText = `Locate at : ${business.location.display_address.toString()}`;
  location.appendChild(address);

  const checkyelp = document.createElement("section");
  checkyelp.classList.add("checkyelp");
  businessElement.appendChild(checkyelp);

  const yelpaddress = document.createElement("a");
  yelpaddress.classList.add("url");
  yelpaddress.href = business.url;
  yelpaddress.innerText = "Check customer rating at here";
  checkyelp.appendChild(yelpaddress);

  return businessElement;
}

const main = document.querySelector("#businesses");
function loadpost(x) {
  main.appendChild(elementForBusiness(x));
}

const seachitem = document.querySelector(".yelpsearch");
let value = document.querySelector("#searchform").value;

function fetchAllPosts(newfetch) {
  fetch(`https://yelp-places.herokuapp.com/api/${newfetch}`)
    .then(r => r.json())
    .then(data => {
      let place = newfetch;
      document.querySelector("#site-heading").innerText = place;
      console.log(data.businesses);
      data.businesses.forEach(x => {
        loadpost(x);
      });
    })
    .catch(console.error);
}
fetchAllPosts("bubble tea");

seachitem.addEventListener("submit", e => {
  e.preventDefault();
  main.innerText = "";
  value = document.querySelector("#searchform").value;
  fetchAllPosts(value);
  document.querySelector("#searchform").value = "";
});
