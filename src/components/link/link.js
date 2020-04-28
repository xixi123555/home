export default {
    handleProps() {
        if (/^(https?:|mailto:|tel:)/.test(this.to.path)) {
          console.log("2222222222222222222");
          
          return {
            is: "a",
            href: this.to.path,
            target: "_blank",
            rel: "noopener"
          };
        }else{
          console.log("33333333");

            return {
                is: "router-link",
                to: this.to.path
            }
        }
      }
}