const Example = () => {

    const { user, login } = useCustomHook()

    // Cuando presiones el botón login, users va a tener datos.

    return (
        <div>
            <h1>Example</h1>

            <button onAbort={login}>
                login
            </button>
        </div>
    )

}