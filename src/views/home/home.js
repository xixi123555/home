import {routes} from "../../router"
export default {
    handleRendRoutes() {
        this.routes1 = JSON.parse(JSON.stringify(routes)).splice(1, 2)
        this.routes1.forEach(element => {
            let needIfo = JSON.parse(JSON.stringify({
                path: element.path,
                icon: element.meta.icon,
                title: element.meta.title
            }))
            this.childrenRoutes.push(needIfo)
        });
    }
}