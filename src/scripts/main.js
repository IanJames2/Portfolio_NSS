import { Portfolio } from "./Portfolio.js"
import { fetchProjects } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    
    fetchProjects()
    .then(
        () => {
            mainContainer.innerHTML = Portfolio()
        }
    )
    .catch(console.log('err, or delete'))
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()
