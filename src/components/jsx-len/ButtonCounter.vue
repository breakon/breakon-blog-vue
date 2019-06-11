<script>
// demo.jsx
const ButtonCounter = {
  //inheritAttrs: false,
  name: "button-counter",
  props: ["count"],
  methods: {
    onClick() {
      // console.log(this.propsCount);
      this.$emit("change", this.count + 1);
    }
  },
  render() {
    return (
      <button onClick={this.onClick}>You clicked me {this.count} times.</button>
    );
  }
};

export default {
  name: "button-counter-container",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    onChange(val) {
      this.count = val;
    }
  },
  render() {
    const { count, onChange } = this;
    const btnProps = {
      props: {
        count
      },
      on: {
        change: onChange
      },
      attrs: {
        type: "button"
      },

      style: { marginTop: "10px" }
    };

    return (
      <div>
        <ButtonCounter
          style={{ marginTop: "10px" }}
          type="button"
          count={count}
          onChange={onChange}
        />
        <br />
        <ButtonCounter {...btnProps} />
        <br />
        <ButtonCounter
          style={{ marginTop: "10px" }}
          count={count}
          type="button"
          domPropsInnerHTML={`hello ${this.count}.`}
          onChange={onChange}
        />
      </div>
    );
  }
};
</script>
<style>

</style>
