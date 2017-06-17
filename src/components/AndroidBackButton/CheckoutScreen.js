class CheckoutScreen extends Component {
  render() {
    const { isLoading } = this.props;

    return (
      <View>
        <Text>Checkout Page</Text>
        <AndroidBackButton
          onPress={() => { return this.goBackInNavigationStack() }}
        />

        { isLoading &&
          <AndroidBackButton
            onPress={() => { this.showWarningToUser(); return true }}
          />
        }
      </View>
    );
  }
}
