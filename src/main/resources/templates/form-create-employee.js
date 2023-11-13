function showFormCreate() {
    $.ajax({
        url:"http://localhost:8080/api/employees/findAllDepartment",
        type: "GET",
        success: function (departments) {
            let content = `<select id="department-create" >`
            for (let i = 0; i < departments.length; i ++) {
                content += `<option value="${departments[i].id}">${departments[i].name}</option>`
            }
            content += `</select>`
            document.getElementById("department-to-select").innerHTML = content;
            console.log(content)
        }
    })
}

function saveNewEmployee() {
    let employeecode = $("#code-create").val();
    let name = $("#name-create").val();
    let age = $("#age-create").val();
    let salary = $("#salary-create").val();

    let id_department = $("#department-create").val();
    let employee = {
        employeecode:employeecode,
        name: name,
        age: age,
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
            window.location.href="home.html"
            alert("Thêm mới employee thành công!")
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