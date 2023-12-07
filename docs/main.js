const App = () => {
    const _init = async () => {
        const data = await getData()
        console.log('Client', data)
    }

    const getData = async () => {
        const host = 'https://cors-tests.fly.dev/'
        const url = 'api/traffic'
        console.log('url:', url)
        const response = await fetch(host + url)
        const data = await (response.json())
        return data
    }

    return {
        init: _init
    }
}
const app = App()
app.init()