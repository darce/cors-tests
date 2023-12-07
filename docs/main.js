const App = () => {
    const _init = async () => {
        const data = await getData()
        console.log('Client', data)
    }

    const getData = async () => {
        const url = "./api/traffic"
        const response = await fetch(url)
        const data = await (response.json())
        return data
    }

    return {
        init: _init
    }
}
const app = App()
app.init()