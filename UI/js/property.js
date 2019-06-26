document.querySelectorAll('.delete-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            if (confirm("Are you sure?")) {
                storage.setFlash('flash', {
                    message: "Deleted successfully",
                    className: 'bg-danger'
                })
                location.reload()
            }
        });
    })
document.querySelectorAll('.delete-button')
    .forEach((button) => {
        button.addEventListener('click', () => {
            if (confirm("Are you sure?")) {
                storage.setFlash('flash', {
                    message: "Deleted successfully",
                    className: 'bg-danger'
                })
                location.reload()
            }
        });
    })
