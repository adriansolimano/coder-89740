const Example2 = () => {


    const { user, login } = useCustomHook()


    // Cuando se hizo click en login del componente Example, este user va a tener datos?

    // NO!!!!

    // Si cambia un dato, solo se actualiza el componente que lo tiene, no se actualizan los demás componentes que usan ese dato. Para eso se usan los contextos.   

    return (
        <div>
            <h1>Example</h1>
        </div>
    )

}