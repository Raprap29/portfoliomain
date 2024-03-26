export const Debugger = () => {
    setInterval(
        function (){eval('debugger');}, 1000
    )
}