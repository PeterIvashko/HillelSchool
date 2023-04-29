function UserTable({ form, content, userInfo, addButton }) {
    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const editId = form.dataset.editId;
            if (editId) {
                this.updateUser(editId, form.elements['name'].value, form.elements['phone'].value, form.elements['age'].value);
            } else {
                this.addUser(form.elements['name'].value, form.elements['phone'].value, form.elements['age'].value);
            }
        });
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.remove('open');
            delete form.dataset.editId;
        });
        this.loadUsers();
    };

    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        };
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers));
    };

    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => {
                this.userTemplate(user);
                const editButton = content.querySelector(`button.edit[data-id="${user.id}"]`);
                editButton.addEventListener('click', () => this.editUser(user.id));
                const deleteButton = content.querySelector(`button.delete[data-id="${user.id}"]`);
                deleteButton.addEventListener('click', () => this.deleteUser(user.id));
            });
        }
    };

    this.userTemplate = function (user) {
        content.insertAdjacentHTML('beforeend', (
            `<tr data-id="${user.id}">`+
                `<td>${user.id}</td>`+
                `<td>${user.name}</td>`+
                `<td>${user.phone}</td>`+
                `<td>${user.age}</td>`+
                `<td>`+
                    `<button class="btn view" data-id="${user.id}">View</button>`+
                    `<button class="btn edit" data-id="${user.id}">Edit</button>`+
                    `<button class="btn delete" data-id="${user.id}">Delete</button>`+
                `</td>`+
            `</tr>`
        ));
    };

    this.editUser = function (id) {
        const user = JSON.parse(localStorage.getItem('users')).find(u => u.id === id);
        form.elements['name'].value = user.name;
        form.elements['phone'].value = user.phone;
        form.elements['age'].value = user.age;
        form.dataset.editId = id;
        form.classList.add('open');
    };

    this.updateUser = function (id, name, phone, age) {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const index = currentUsers.findIndex(user => user.id === id);
        currentUsers[index].name = name;
        currentUsers[index].phone = phone;
        currentUsers[index].age = age;
        localStorage.setItem('users', JSON.stringify(currentUsers));
        const row = content.querySelector(`tr[data-id="${id}"]`);
        row.innerHTML = '';
        this.userTemplate(currentUsers[index]);
        delete form.dataset.editId;
        form.reset();
        form.classList.remove('open');
    };

    this.deleteUser = function (id) {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const updatedUsers = currentUsers.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        const row = content.querySelector(`tr[data-id="${id}"]`);
        row.remove();
    };

}

(new UserTable({
form: document.querySelector('.js--form'),
userInfo: document.querySelector('.js--user'),
addButton: document.querySelector('.js--add'),
content: document.querySelector('.js--content'),
})).init();