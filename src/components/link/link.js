export default {
    handleProps() {
        if (/^(https?:|mailto:|tel:)/.test(this.to.path)) {
          return {
            is: "a",
            href: this.to.path,
            target: "_blank",
            rel: "noopener"
          };
        }else{
            return {
                is: "router-link",
                to: this.to.path
            }
        }
      }
}