import '../css/app.css';
import { UserApi } from './api/userApi';

export function multiplyByTwo(num) {
  return num * 2;
}


var userApi = new UserApi();
userApi.getUsers()
        .then(result => {
          var container = document.querySelector('#users');
          var template = document.querySelector('#user-template');

          result.forEach(user => {
            let content = template.cloneNode(true);

            Object.keys(user).forEach(key => {
              var pattern = `{{${key}}}`;
              var reg = new RegExp(pattern, "g");
              content.innerHTML = content.innerHTML.replace(reg, user[key]);
            });

            container.appendChild(content.content);
          });

          var deleteLinks = document.querySelectorAll('[data-role="delete"]');
          deleteLinks.forEach(link => link.addEventListener('click', deleteUser));

        });

function deleteUser(e) {
  e.preventDefault();

  var row = e.target.closest('tr');
  var id = row.dataset.id;
  userApi.deleteUser(id).then(() => row.remove());
}






