function showListEmployee() {
    $.ajax({
        url: "http://localhost:8080/api/employees/findAll",
        type: "GET",
        success: function (employees) {
            let content = `<table class="table table-striped table-hover">
            <tr><td>EMPLOYEE CODE</td>
            <td>NAME</td>
            <td>AGE</td>
            <td>SALARY</td>
            <td>DEPARTMENT</td>
            <td>ACTION</td><td></td></tr>`
            for (let i = 0; i < employees.length; i ++) {
                content += `<tr><td>${employees[i].employeecode}</td>
                <td>${employees[i].name}</td>
                <td>${employees[i].age}</td>
                <td>${employees[i].salary}</td>
                <td>${employees[i].department.name}</td>
                <td><button class="btn btn-warning" onclick="editEmployee(${employees[i].id})">Edit</button></td>
                <td><button class="btn btn-danger" onclick="deleteEmployee(${employees[i].id})">Delete</button></td></tr>`
            }
            content += `</table>`
            document.getElementById("list-employee").innerHTML = content;
        },
    })
    event.preventDefault()
}
function addNewEmployee() {
    window.close()
    window.open("form-create-employee.html")
}
function deleteEmployee(id) {
    $.ajax({
        url: "http://localhost:8080/api/employees/deleteEmployee/" + id,
        type: "DELETE",
        success: function () {
            alert("Xoá thành công!")
            showListEmployee()
        }
    })
}
function editEmployee(id) {
    localStorage.setItem("id_edit", id)
    window.close();
    window.open("form-edit-employee.html")
}
function searchByName() {
    let name = $("#name-search").val();
    console.log(name)
    $.ajax({
        url: "http://localhost:8080/api/employees/searchByName/" + name,
        type: "GET",
        success: function (employees) {
            if (employees.length === 0) {
                return alert('Không có tên cần tìm!')
            } else {
                let content = `<table class="table table-striped table-hover"><tr><td>EMPLOYEE CODE</td>
                                                                                            <td>NAME</td>
                                                                                            <td>AGE</td>
                                                                                            <td>SALARY</td>
                                                                                            <td>DEPARTMENT</td>
                                                                                            <td>ACTION</td>
                                                                                            <td></td></tr>`
                for (let i = 0; i < employees.length; i ++) {
                    content += `<tr><td>${employees[i].employeecode}</td>
                                    <td>${employees[i].name}</td>
                                    <td>${employees[i].age}</td>
                                    <td>${employees[i].salary}</td>
                                    <td>${employees[i].department.name}</td>
                                    <td><button class="btn btn-warning" onclick="editEmployee(${employees[i].id})">Edit</button>
                                    </td><td><button class="btn btn-danger" onclick="deleteEmployee(${employees[i].id})">Delete</button></td></tr>`
                }
                content += `</table>`
                document.getElementById("list-employee").innerHTML = content;
            }

        }
    })
}
function home() {
    window.close()
    window.open("home.html")
}