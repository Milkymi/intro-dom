const container = document.createElement("div");

container.style.cssText = `
width: 500px;
height: 200px;
margin: 150px auto;
`;
document.body.append(container);

const text = document.createElement("div");

text.style.cssText = `
border-radius: 15px; 
   border: 2px solid #a80505;
   height: 120px;
   width: 450px;
   margin: auto;
   font-size: 22px;
   padding: 15px 10px;
   box-sizing: border-box;
`;
text.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt cumque in! In, omnis repellendus ";
const social = document.createElement("div");
const facebook = document.createElement("div");
const google = document.createElement("div");
const instagram = document.createElement("div");

facebook.innerHTML = `<a href=https://facebook.ru/>facebook</a>`;
google.innerHTML = `<a href=https://www.google.ru/>google</a>`;
instagram.innerHTML = `<a href=https://www.instagram.com/>instagram</a>`;

social.prepend(facebook, google, instagram);

social.style.cssText = `
   height: 50px;
   width: 450px;
   margin: auto;
   font-size: 22px;
   padding: 15px 10px;
   box-sizing: border-box;
   display: flex;
justify-content: space-between;
`;

container.prepend(text, social);