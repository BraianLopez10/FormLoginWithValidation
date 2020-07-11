let form = document.getElementById("form");

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let name = document.getElementById("name")
    let lastName = document.getElementById("lastName")
    let password = document.getElementById("password")
    let email = document.getElementById("email")

    let elementosArray = [name, lastName, password, email];

    let errors = false;

    elementosArray.map((el) => {
        let value = el.value.trim();
        let name = el.name;

        switch (name) {
            case "name":
                if (value === "" || value.length > 20) {
                    setError(el, "Error en el nombre")
                    errors = true;
                } else {
                    clearError(el)
                }
                break;
            case "lastName":
                if (value === "" || value.length > 20) {
                    setError(el, "Error en el apellido")
                    errors = true;
                } else {
                    clearError(el)
                }
                break;
            case "email":
                if (value === "") {
                    setError(el, "Error en el email")
                    errors = true;
                } else {
                    clearError(el)
                }
                break;
            case "password":
                if (value === "" || value.length > 20) {
                    setError(el, "Error en la contraseña")
                    errors = true;
                } else {
                    clearError(el)
                }
                break;

            default:
                break;
        }
    })
})

const clearError = (element) => {
    let parent = element.parentElement;

    let errorElement = parent.getElementsByClassName("status")
    let messageError = parent.getElementsByClassName("messague");
    messageError[0].style.display = "none";
    messageError[0].innerHTML = "";
    errorElement[0].style.display = "none";
}

const setError = (element, messague) => {
    let parent = element.parentElement;

    let errorElement = parent.getElementsByClassName("status")
    let messageError = parent.getElementsByClassName("messague");
    messageError[0].style.display = "block";
    messageError[0].innerHTML = messague;
    errorElement[0].style.display = "block";
}

