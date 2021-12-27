import RouteCheckout from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'SourceComponent/ContentWrapper';
import { CHECKOUT_URL } from 'SourceRoute/Checkout/Checkout.config'
import { appendWithStoreCode } from "SourceUtil/Url"
import ProgressBar from "../../component/ProgressBar"

import './Checkout.extension.style.scss'

class Checkout extends RouteCheckout {

    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0
        }
    }


    updateStep() {
        const { checkoutStep, history } = this.props;
        const indexOfActiveStep = Object.keys(this.stepMap).indexOf(checkoutStep)
        if (indexOfActiveStep !== -1) {
            this.setState({
                currentStep: indexOfActiveStep
            })
        }
        const { url } = this.stepMap[checkoutStep];


        history.push(appendWithStoreCode(`${CHECKOUT_URL}${url}`));
    }

    render() {
        console.log({ steps: this.stepMap })
        return (
            <main block="Checkout">
                <ProgressBar steps={this.stepMap} currentStep={this.state.currentStep} />
                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >
                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}

export default Checkout