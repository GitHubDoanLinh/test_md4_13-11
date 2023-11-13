function showFormEdit() {
    let id = localStorage.getItem("id_edit");
    console.log(id)
    $.ajax({

        url: "http://localhost:8080/api/employees/findById/" + id,
        type: "GET",
        success: function (employee) {
            $("#name-edit").val(employee.name);
            $("#age-edit").val(employee.age);
            $("#salary-edit").val(employee.salary);
        }
    })
    findAllDepartment()
}
function findAllDepartment() {
    $.ajax({
        url:"http://localhost:8080/api/employees/findAllDepartment",
        type: "GET",
        success: function (departments) {
            let content = `<select id="department-edit">`
            for (let i = 0; i < departments.length; i ++) {
                content += `<option value="${departments[i].id}">${departments[i].name}</option>`
            }
            content += `</select>`
            document.getElementById("department-to-select-edit").innerHTML = content;
        }
    })
}
function saveEditEmployee() {
    let id = localStorage.getItem("id_edit");
    let name = $("#name-edit").val();
    let age= $("#age-edit").val();
    let salary = $("#salary-edit").val();
    let id_department= $("#department-edit").val();
    let employee = {
        id: id,
        name: name,
        age:age,
        salary: salary,

        department: {
            id: id_department
        }
    }
    $.ajax({
        headers: {
            "Content-Type": "application/json"
        }, // phải có cái headers này chú ý!!!!
        url: "http://localhost:8080/api/employees/addNewEmployee",
        type: "POST",
        data: JSON.stringify(employee),
        success: function () {
            alert("Sửa thành công!")
            window.location.href = "home.html"
        },
        error: function () {
            alert("Chưa thêm được")
        }
    })
    event.preventDefault()
}
function home() {
    window.close()
    window.open("home.html")
}