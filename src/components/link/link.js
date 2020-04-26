export default {
    handleProps() {
        if (/^(https?:|mailto:|tel:)/.test(this.to)) {
          return {
            is: "a",
            href: this.to,
            target: "_blank",
            rel: "noopener"
          };
        }else{
            return {
                is: "router-link",
                to: this.to
            }
        }
      }
}